//#region Import
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDarkModeConfigStore } from '../../zustand/config.store'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
    IAuthResponse,
    ILoginCredentials,
} from '../../interface/modules/auth/auth.interface'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import useApi from '../../hooks/api.hooks'
import useCrypto from '../../hooks/crypto.hooks'
import { useAccountStore } from '../../zustand/account.store'
import CenterLoader from '../../components/center-loader.component'
import Toast from '../../components/toast.component'
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

const Login = () => {

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
                                    <div className='relative flex items-center mt-4'>
                                        <span className='absolute'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='w-6 h-6 mx-3 text-gray-400 dark:text-gray-500'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                                strokeWidth='2'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                                />
                                            </svg>
                                        </span>

                                        <input
                                            name='email'
                                            type='text'
                                            className={`block w-full py-2.5 pl-11 pr-5 rtl:pr-11 rtl:pl-5 text-sm placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-20
                                        ${authFormik.touched.email &&
                                                    Boolean(authFormik.errors.email)
                                                    ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-300 dark:border-red-400 dark:bg-gray-800 dark:text-red-400 dark:focus:border-red-300'
                                                    : 'border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500'
                                                }
                                        `}
                                            value={authFormik.values.email}
                                            placeholder='Email address'
                                            onChange={authFormik.handleChange}
                                        />
                                    </div>
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
                                    <div className='relative flex items-center mt-4'>
                                        <span className='absolute'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='w-6 h-6 mx-3 text-gray-400 dark:text-gray-500'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                                strokeWidth='2'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                                                />
                                            </svg>
                                        </span>

                                        <input
                                            name='password'
                                            type='password'
                                            className={`block w-full py-2.5 pl-11 pr-5 rtl:pr-11 rtl:pl-5 text-sm placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-20
                                        ${authFormik.touched.password &&
                                                    Boolean(authFormik.errors.password)
                                                    ? 'border-red-400 text-red-500 focus:border-red-400 focus:ring-red-300 dark:border-red-400 dark:bg-gray-800 dark:text-red-400 dark:focus:border-red-300'
                                                    : 'border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500'
                                                }
                                        `}
                                            value={authFormik.values.password}
                                            placeholder='Password'
                                            onChange={authFormik.handleChange}
                                        />
                                    </div>
                                    <div className='mt-1 transform'>
                                        {authFormik.touched.password &&
                                            Boolean(authFormik.errors.password) ? (
                                            <span className='text-red-400 text-sm'>
                                                {authFormik.errors.password}
                                            </span>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <button
                                        type='submit'
                                        aria-label='signin'
                                        className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${loginMutation.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={loginMutation.isLoading}
                                    >
                                        Sign in
                                    </button>

                                    <p className='mt-4 text-center text-gray-400 transform'>
                                        or Sign In with
                                    </p>

                                    <button
                                        onClick={() => setShowToast(true)}
                                        aria-label='signInGoogle'
                                        type="button"
                                        className='w-full flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
                                    >
                                        <svg
                                            className='w-6 h-6 mx-2'
                                            viewBox='0 0 40 40'
                                        >
                                            <path
                                                d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                                fill='#FFC107'
                                            />
                                            <path
                                                d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                                fill='#FF3D00'
                                            />
                                            <path
                                                d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                                fill='#4CAF50'
                                            />
                                            <path
                                                d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                                fill='#1976D2'
                                            />
                                        </svg>

                                        <span className='mx-2'>
                                            Sign in with Google
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
            </section>
        </>
    )
}

export default Login
