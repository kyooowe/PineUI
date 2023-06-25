import { memo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentForm from './student.form'
import { ICreateStudent, IStudent } from '@interface/modules/student/student.interface'
import useApi from '@hooks/api.hooks'
import { useMutation } from '@tanstack/react-query'
import Toast from '@/components/toast/toast.component'
import IconedButton from '@/components/buttons/icon-button.component'

const StudentCreate = memo(() => {

    //#region State Helper
    const navigate = useNavigate()
    const { post } = useApi()
    const formRef = useRef<HTMLFormElement>(null)
    //#endregion

    //#region State
    const [hasError, setHasError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    //#endregion

    //#region React Query
    const createStudentMutation = useMutation({
        mutationFn: async (student: ICreateStudent) => {
            return await post<IStudent>('student', student)
        }
    })
    //#endregion

    //#region Handler
    const handleSubmit = async (values: ICreateStudent) => {

        // Get result
        const result = await createStudentMutation.mutateAsync(values)

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
                            Create Student
                        </h2>
                    </div>

                    <p className='mt-1 text-sm text-gray-500 dark:text-gray-300'>
                        To avoid bad data. All fields are required, please
                        ensure that you have entered valid information before
                        submitting the form.
                    </p>
                </div>

                <div className='flex items-center mt-4 gap-x-3'>
                    <IconedButton
                        type='button'
                        text='Cancel'
                        ariaLabel='btnCreateStudentCancel'
                        onClick={() => navigate('/pages/students/list')}
                        variant='plain'
                        icon={
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
                        }
                    />

                    <IconedButton
                        type='submit'
                        isDisabled={createStudentMutation.isLoading}
                        onClick={() => formRef.current?.requestSubmit()}
                        text='Submit'
                        ariaLabel='btnCreateStudentSubmit'
                        variant='primary'
                        icon={
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
                        }
                    />
                </div>
            </div>

            <StudentForm onSubmit={handleSubmit} formRef={formRef} />
        </section>
    )
})

export default StudentCreate
