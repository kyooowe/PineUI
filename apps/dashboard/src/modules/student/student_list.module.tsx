//#region Import
import { Suspense, lazy, memo, useState } from 'react'
import Loader from '../../components/loader.component'
import { useNavigate } from 'react-router-dom'
const Table = lazy(() => import('./student.table'))
//#endregion

const StudentList = memo(() => {

    //#region State Helper
    const navigate = useNavigate()
    //#endregion

    //#region State
    const [studentCount, setStudentCount] = useState<number>(0)
    //#endregion

    return (
        <section>
            <div className='sm:flex sm:items-center sm:justify-between'>
                <div>
                    <div className='flex items-center gap-x-3'>
                        <h2 className='text-lg font-medium text-gray-800 dark:text-white'>
                            Students
                        </h2>

                        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-200 rounded-full dark:bg-gray-800'>
                            {studentCount}
                        </span>
                    </div>

                    <p className='mt-1 text-sm text-gray-500 dark:text-gray-300'>
                        To ensure accuracy, we have created a complete list
                        of students enrolled this semester.
                    </p>
                </div>

                <div className='flex items-center mt-4 gap-x-3'>
                    <button
                        type='button'
                        className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'
                    >
                        <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g clipPath='url(#clip0_3098_154395)'>
                                <path
                                    d='M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832'
                                    stroke='currentColor'
                                    strokeWidth='1.67'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_3098_154395'>
                                    <rect
                                        width='20'
                                        height='20'
                                        fill='white'
                                    />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Import</span>
                    </button>

                    <button
                        type='button'
                        onClick={() => navigate('/pages/students/create')}
                        className='flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                        </svg>

                        <span>Add Student</span>
                    </button>
                </div>
            </div>

            <Suspense fallback={<Loader />}>
                <Table studentCount={studentCount} setStudentCount={setStudentCount} />
            </Suspense>
        </section>
    )
})

export default StudentList
