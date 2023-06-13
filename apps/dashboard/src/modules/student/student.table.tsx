//#region Import
import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react'
import Pagination from '@components/pagination.component'
import { useMutation, useQuery } from '@tanstack/react-query'
import useApi from '@hooks/api.hooks'
import { IStudent, IStudentTableProps } from '@interface/modules/student/student.interface'
import Toast from '@components/toast.component'
import { useNavigate } from 'react-router-dom'
import useDebounce from '@hooks/debounce.hooks'
import { IResponse } from '@interface/response.interface'
import CenterLoader from '@components/center-loader.component'
import IconTextInput from '@/components/text-input/icon-text-input.component'
//#endregion

const StudentTable = memo(({ setStudentCount }: IStudentTableProps) => {

    //#region State Helper
    const { get, remove } = useApi()
    const navigate = useNavigate()
    //#endregion

    //#region State

    // Toast
    const [showToast, setShowToast] = useState<boolean>(false)
    const [toastMessage, setToastMessage] = useState<string>("")
    const [toastType, setToastType] = useState<"primary" | "success" | "danger" | "warning">("primary")

    // Fetch Helper 
    const [isListEmpty, setIsListEmpty] = useState<boolean>(false)
    const [searchType, setSearchType] = useState<string>("active")

    // Pagination
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)

    // Debounce
    const [searchKey, setSearchKey] = useState<string>("")
    const debounceSearchKey = useDebounce({ value: searchKey, delay: 1000 })
    //#endregion

    //#region React Query

    // Query for getting student list based on searchType
    const { data: studentList, refetch, isFetching } = useQuery({
        queryKey: ['studentList'],
        queryFn: () => get<IStudent[]>(`student/${searchType}/${debounceSearchKey === '' ? '_' : debounceSearchKey}/${currentPage}`),
        onSuccess: (currentStudentList: IResponse<IStudent[]>) => {
            handleCountAndTotal(currentStudentList.data, currentStudentList.count)
        }
    })

    const deleteStudentMutation = useMutation({
        mutationFn: async (student: IStudent) => {
            return await remove<IStudent>(`student/${student._id}`)
        }
    })

    const restoreStudentMutation = useMutation({
        mutationFn: async (student: IStudent) => {
            return await get<IStudent>(`student/restore/${student._id}`)
        }
    })
    //#endregion

    //#region UseEffect

    /**
     * @description for closing toast, make 3000 for more smooth ui
     */
    useEffect(() => {
        if (showToast) {
            setTimeout(() => {
                setShowToast(false)
                setToastMessage('')
            }, 3000)
        }
    }, [showToast])

    /**
     * @description run search query if debounceSearchKey, searchType, currentPage has been changed
     */
    useEffect(() => {
        refetch()
    }, [debounceSearchKey, searchType, currentPage]);

    /**
     * @description showing of toast
     */
    useEffect(() => {
        if (toastMessage !== '')
            if (!showToast)
                setShowToast(true)
    }, [toastMessage])
    //#endregion

    //#region UseMemo

    /**
     * @description memoized columns
     */
    const cols = useMemo(() => {
        return (
            <>
                <th
                    scope='col'
                    className='px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400'
                >
                    <button
                        aria-label='SNumber'
                        className='flex items-center gap-x-2'
                    >
                        <span>Student Number</span>

                        <svg
                            className='h-3'
                            viewBox='0 0 10 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.3'
                            />
                        </svg>
                    </button>
                </th>
                <th
                    scope='col'
                    className='px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400'
                >
                    <button
                        aria-label='Name'
                        className='flex items-center gap-x-2'
                    >
                        <span>Name</span>

                        <svg
                            className='h-3'
                            viewBox='0 0 10 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.3'
                            />
                        </svg>
                    </button>
                </th>
                <th
                    scope='col'
                    className='px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400'
                >
                    <button
                        aria-label='Level'
                        className='flex items-center gap-x-2'
                    >
                        <span>Level</span>

                        <svg
                            className='h-3'
                            viewBox='0 0 10 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.3'
                            />
                        </svg>
                    </button>
                </th>
                <th
                    scope='col'
                    className='px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400'
                >
                    <button
                        aria-label='Class'
                        className='flex items-center gap-x-2'
                    >
                        <span>Class</span>

                        <svg
                            className='h-3'
                            viewBox='0 0 10 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.3'
                            />
                        </svg>
                    </button>
                </th>
                <th
                    scope='col'
                    className='px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400'
                >
                    <button
                        aria-label='Status'
                        className='flex items-center gap-x-2'
                    >
                        <span>Status</span>

                        <svg
                            className='h-3'
                            viewBox='0 0 10 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.1'
                            />
                            <path
                                d='M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z'
                                fill='currentColor'
                                stroke='currentColor'
                                strokeWidth='0.3'
                            />
                        </svg>
                    </button>
                </th>
            </>
        )
    }, [])

    /**
     * @description memoized table rows
     */
    const rows = useMemo(() => {

        const students: IStudent[] = studentList?.data ?? []

        // Flagger
        if (students.length === 0)
            setIsListEmpty(true)
        else
            setIsListEmpty(false)

        return (
            <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                {
                    students && students.map((student: IStudent, i: number) => (
                        <tr key={i}>
                            <td className='text-left px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                                {student.studentNumber}
                            </td>
                            <td className='text-left px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                                {student.studentName}
                            </td>
                            <td className='text-left px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                                {student.level}
                            </td>
                            <td className='text-left px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                                {student.class}
                            </td>
                            <td className='text-left px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                {
                                    student.isActive ? (
                                        <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800'>
                                            <span className='h-1.5 w-1.5 rounded-full bg-emerald-500'></span>

                                            <h2 className='text-sm font-normal text-emerald-500'>
                                                Active
                                            </h2>
                                        </div>
                                    ) : (
                                        <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800'>
                                            <span className='h-1.5 w-1.5 rounded-full bg-red-500'></span>

                                            <h2 className='text-sm font-normal text-red-500'>
                                                Inactive
                                            </h2>
                                        </div>
                                    )
                                }
                            </td>
                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                <div className='flex items-center gap-x-6'>
                                    {
                                        student.isActive ? (
                                            <>
                                                <button
                                                    aria-label='inactive'
                                                    title="Make Inactive"
                                                    onClick={() => handleActionButton('delete', student)}
                                                    className='text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none'
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                                        />
                                                    </svg>

                                                </button>

                                                <button
                                                    aria-label='edit'
                                                    title="Edit"
                                                    onClick={() => handleActionButton('edit', student)}
                                                    className='text-gray-500 transition-colors duration-200 dark:hover:text-blue-500 dark:text-gray-300 hover:text-blue-500 focus:outline-none'
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
                                                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                        />
                                                    </svg>
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                aria-label='restore'
                                                title='Restore'
                                                onClick={() => handleActionButton('restore', student)}
                                                className='text-gray-500 transition-colors duration-200 dark:hover:text-green-500 dark:text-gray-300 hover:text-green-500 focus:outline-none'
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                                    />
                                                </svg>

                                            </button>
                                        )
                                    }
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody >
        )

    }, [studentList])
    //#endregion

    //#region Handler

    const handleActionButton = async (type: string, student: IStudent) => {

        switch (type) {
            case 'restore': {
                const result = await restoreStudentMutation.mutateAsync(student)

                if (result.statusCode !== 200)
                    setToastMessage('Something error occured, please contact administrator!')
                else {
                    refetch()
                    setToastType("success")
                    setToastMessage(`${student.studentName} successfully restored.`)
                }
                break;
            }
            case 'delete': {
                const result = await deleteStudentMutation.mutateAsync(student)

                if (result.statusCode !== 200)
                    setToastMessage('Something error occured, please contact administrator!')
                else {
                    refetch()
                    setToastType("danger")
                    setToastMessage(`${student.studentName} successfully deleted.`)
                }
                break;
            }
            default: {
                navigate('/pages/students/update', { state: { studentData: student } })
                break;
            }
        }
    }

    const handlePaginationChange = (page: number) => {
        setCurrentPage(page)
    }

    const handleTotalPages = (totalCount: number) => {
        const studentsPerPage = 10;
        return Math.ceil(totalCount / studentsPerPage)
    }

    const handleCountAndTotal = (data: IStudent[], total: number) => {
        setStudentCount(data.length)
        setTotalPages(handleTotalPages(total))
    }
    //#endregion

    return (
        <>
            <Toast
                show={showToast}
                setShow={setShowToast}
                type={toastType}
                message={toastMessage}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                    </svg>
                }
            />
            <div className="mt-4 md:flex md:items-center md:justify-between">
                <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                    <button
                        aria-label='active'
                        onClick={() => {
                            setSearchType('active')
                            setSearchKey('')
                        }}
                        className={`px-5 py-2 text-sm w-full font-medium text-gray-600 transition-colors duration-200  dark:text-gray-300
                         ${searchType.toLowerCase() === 'active' ?
                                'bg-gray-100 dark:bg-gray-800' :
                                'dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'}
                         `}
                    >
                        Active
                    </button>

                    <button
                        aria-label='inactive'
                        onClick={() => {
                            setSearchType('inactive')
                            setSearchKey('')
                        }}
                        className={`px-5 py-2 text-sm w-full font-medium text-gray-600 transition-colors duration-200  dark:text-gray-300
                         ${searchType.toLowerCase() === 'inactive' ?
                                'bg-gray-100 dark:bg-gray-800' :
                                'dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'}
                         `}
                    >
                        Inactive
                    </button>
                </div>

                <IconTextInput
                    name='txtSearch'
                    placeholder='Search'
                    ariaLabel='txtSearch'
                    type='text'
                    value={searchKey}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchKey(e.target.value)}
                    className='w-96 block sm:mt-1'
                    parentClassName='mt-4 md:mt-0'
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400 dark:text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    }
                />
            </div>
            {
                isFetching ? (
                    <CenterLoader />
                ) : (
                    <>
                        {
                            isListEmpty ? (
                                <div className="flex items-center mt-6 text-center border rounded-lg h-96 dark:border-gray-700">
                                    <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
                                        <div className="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </div>
                                        <h1 className="mt-3 text-lg text-gray-800 dark:text-white">No students found</h1>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400">We're sorry, there are no records to display at this time. Please check back later or contact customer support for assistance. Thank you for your understanding.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex flex-col mt-2'>
                                    <div className='overflow-x-auto'>
                                        <div className='inline-block min-w-full py-2 align-middle'>
                                            <div className='overflow-hidden border border-gray-300 rounded-lg dark:border-gray-700'>
                                                <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                                                    {/* Header */}
                                                    <thead className='bg-gray-50 dark:bg-gray-800'>
                                                        <tr>
                                                            {cols}
                                                            <th
                                                                scope='col'
                                                                className='relative py-3.5 px-4'
                                                            >
                                                                <span className='sr-only'>
                                                                    Edit
                                                                </span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    {/* End Header */}

                                                    {/* Body */}
                                                    {rows}
                                                    {/* End Body */}
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePaginationChange} />
                                </div>
                            )
                        }
                    </>
                )
            }
        </>
    )
})

export default StudentTable
