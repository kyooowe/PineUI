//#region Import
import { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDarkModeConfigStore } from '@zustand/config.store'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
    IAuthResponse,
    ILoginCredentials,
} from '@interface/modules/auth/auth.interface'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import useApi from '@hooks/api.hooks'
import useCrypto from '@hooks/crypto.hooks'
import { useAccountStore } from '@zustand/account.store'
import CenterLoader from '@/components/loader/center-loader.component'
import Toast from '@/components/toast/toast.component'
import Button from '@components/buttons/button.component'
import GoogleButton from '@components/buttons/google-button.component'
import IconTextInput from '@components/text-input/icon-text-input.component'
//#endregion

//#region Validation Schema
const validationSchema = yup.object({
    email: yup
        .string()
        .email('Email must be valid!')
        .required('Email is Required!'),
    password: yup
        .string()
        .min(5, 'Please provide a value that is at least 5 characters long.')
        .required('Password is Required!'),
})
//#endregion

const Login = memo(() => {

    //#region State Helper
    const navigate = useNavigate()
    const { post } = useApi()
    const { encrypt } = useCrypto()

    // Zustand
    const zustandAccount = useAccountStore((state) => state.account)
    const zustandStoreAccount = useAccountStore((state) => state.storeAccount)
    const zustandStoreDarkModeConfig = useDarkModeConfigStore(
        (state) => state.storeIsDarkMode
    )
    //#endregion

    //#region State
    const [hasError, setHasError] = useState<boolean>(false)
    const [showToast, setShowToast] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    //#endregion

    //#region React Query
    const loginMutation = useMutation({
        mutationFn: async (creds: ILoginCredentials) => {
            return await post<IAuthResponse>('auth/login', creds, true)
        },
    })
    //#endregion

    //#region UseEffect
    useEffect(() => {
        document.body.classList.add('dark')
        zustandStoreDarkModeConfig(true)
    }, [])

    useEffect(() => {
        if (showToast)
            setTimeout(() => {
                setShowToast(false)
            }, 3000);
    }, [showToast])

    useEffect(() => {
        if (zustandAccount === '') setLoading(false)
        else {
            setTimeout(() => {
                navigate('/pages/dashboard')
            }, 1000)
        }
    }, [])
    //#endregion

    //#region Formik
    const authFormik = useFormik<ILoginCredentials>({
        initialValues: {
            email: 'admin@email.com',
            password: '12345',
        },
        validationSchema: validationSchema,
        onSubmit: async (values: ILoginCredentials) => {

            // Get result
            const result = await loginMutation.mutateAsync(values)

            if (result.statusCode !== 200) {
                setHasError(true)

                setTimeout(() => {
                    setHasError(false)
                }, 3000)
            } else {

                // Save token in cookies
                Cookies.set('token', encrypt(result.data.token))
                Cookies.set('access_token', encrypt(result.data.accessToken))

                // Store Account info
                zustandStoreAccount(result.data.user)

                navigate('/pages/dashboard')
            }
        },
    })
    //#endregion

    return (
        <>
            <Toast
                type="primary"
                show={showToast}
                setShow={setShowToast}
                message="Ooppps. Still working on it =))"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                }
            />
            <section>

                {
                    loading ? (
                        <CenterLoader />
                    ) : (
                        <div className='container flex items-center justify-center min-h-screen px-6 mx-auto'>
                            <form
                                onSubmit={authFormik.handleSubmit}
                                className='w-full max-w-md'
                            >
                                <p className='mt-3 text-2xl font-semibold text-white transform'>
                                    👋🏻 Sign In
                                </p>

                                {
                                    hasError ? (
                                        <div className='flex mt-4 transform overflow-hidden border border-gray-300 bg-white rounded-lg shadow-md dark:border-gray-600 dark:bg-gray-800'>
                                            <div className='flex items-center justify-center w-12 bg-red-500'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth={1.5}
                                                    stroke='currentColor'
                                                    className='w-6 h-6 text-white'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                                                    />
                                                </svg>
                                            </div>

                                            <div className='px-4 py-2 -mx-3'>
                                                <div className='mx-3'>
                                                    <span className='font-semibold text-red-500 dark:text-red-400'>
                                                        Error
                                                    </span>
                                                    <p className='text-sm text-gray-600 dark:text-gray-200'>
                                                        Your email is already used!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        ''
                                    )
                                }

                                <div>
                                    <IconTextInput
                                        name='email'
                                        type='email'
                                        ariaLabel='txtEmail'
                                        className='block w-full'
                                        parentClassName='mt-4'
                                        value={authFormik.values.email}
                                        onChange={authFormik.handleChange}
                                        hasError={authFormik.touched.email && Boolean(authFormik.errors.email)}
                                        icon={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="white"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                />
                                            </svg>
                                        }
                                    />
                                    <div className='mt-1 transform'>
                                        {authFormik.touched.email &&
                                            Boolean(authFormik.errors.email) ? (
                                            <span className='text-red-400 text-sm'>
                                                {authFormik.errors.email}
                                            </span>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <IconTextInput
                                        name='password'
                                        type='password'
                                        ariaLabel='txtPassword'
                                        className='block w-full'
                                        parentClassName='mt-2'
                                        value={authFormik.values.password}
                                        onChange={authFormik.handleChange}
                                        hasError={authFormik.touched.password && Boolean(authFormik.errors.password)}
                                        icon={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="white"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                                />
                                            </svg>

                                        }
                                    />
                                    <div className='mt-1 transform'>
                                        {
                                            authFormik.touched.password &&
                                                Boolean(authFormik.errors.password) ? (
                                                <span className='text-red-400 text-sm'>
                                                    {authFormik.errors.password}
                                                </span>
                                            ) : (
                                                ''
                                            )
                                        }
                                    </div>
                                </div>

                                <Button
                                    text='Sign In'
                                    ariaLabel='btnSubmit'
                                    variant="primary"
                                    type="submit"
                                    className='w-full mt-3'
                                    isDisabled={loginMutation.isLoading}
                                    isLoading={loginMutation.isLoading}
                                />

                                <p className='mt-4 text-center text-gray-400 transform'>
                                    or Sign In with
                                </p>

                                <GoogleButton
                                    className='w-full mt-3'
                                    onClick={() => setShowToast(true)}
                                />
                            </form>
                        </div>
                    )}
            </section>
        </>
    )
})

export default Login
