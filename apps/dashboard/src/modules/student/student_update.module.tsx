import { memo, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StudentForm from './student.form'
import { IUpdateStudent, IStudent } from '@interface/modules/student/student.interface'
import useApi from '@hooks/api.hooks'
import { useMutation } from '@tanstack/react-query'
import Toast from '@components/toast.component'
import Loader from '@components/loader.component'

const StudentUpdate = memo(() => {

    //#region State Helper
    const navigate = useNavigate()
    const { put } = useApi()
    const formRef = useRef<HTMLFormElement>(null)
    const { state } = useLocation()
    //#endregion

    //#region State
    const [hasError, setHasError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)
    //#endregion

    //#region React Query
    const updateStudentMutation = useMutation({
        mutationFn: async (student: IUpdateStudent) => {
            return await put<IStudent>('student', student)
        }
    })
    //#endregion

    //#region UseEffect
    useEffect(() => {
        if(state === null)
            navigate('/pages/students/list')

        setLoading(false)
    }, [state])
    //#endregion

    //#region Handler
    const handleSubmit = async (values: IUpdateStudent) => {

        // Get result
        const result = await updateStudentMutation.mutateAsync(values)

        if (result.statusCode === 200)
            navigate('/pages/students/list')
        else {
            setHasError(true)
            setErrorMessage(result.statusText)
        }

    }
    //#endregion

    return (
        <section>
            <Toast
                type="danger"
                show={hasError}
                setShow={setHasError}
                message={errorMessage}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                }
            />
            <div className='sm:flex sm:items-center sm:justify-between'>
                <div>
                    <div className='flex items-center gap-x-3'>
                        <h2 className='text-lg font-medium text-gray-800 dark:text-white'>
                            Update Student
                        </h2>
                    </div>

                    <p className='mt-1 text-sm text-gray-500 dark:text-gray-300'>
                        To avoid bad data. All fields are required, please
                        ensure that you have entered valid information before
                        submitting the form.
                    </p>
                </div>

                <div className='flex items-center mt-4 gap-x-3'>
                    <button
                        type='button'
                        onClick={() => navigate('/pages/students/list')}
                        className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
                            />
                        </svg>

                        <span>Cancel</span>
                    </button>

                    <button
                        type='submit'
                        disabled={updateStudentMutation.isLoading}
                        onClick={() => formRef.current?.requestSubmit()}
                        className='flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-400 dark:hover:bg-blue-400 dark:bg-blue-600'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12'
                            />
                        </svg>

                        <span>Submit</span>
                    </button>
                </div>
            </div>

            {
                loading ? (
                    <Loader />
                ) : (
                    <StudentForm onSubmit={(values) => handleSubmit(values as IUpdateStudent)} studentData={state.studentData} formRef={formRef} />
                )
            }
        </section>
    )
})

export default StudentUpdate
