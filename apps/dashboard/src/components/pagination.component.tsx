import { useMemo } from "react"
import { IPaginationProps } from "../interface/components/pagination.interface"


const Pagination = ({ currentPage, totalPages, onPageChange }: IPaginationProps) => {

    //#region UseMemo
    const pages = useMemo(() => {
        const absolutePages: number[] = []

        for (let i = 1; i <= totalPages; i++)
            absolutePages.push(i)

        return absolutePages;
    }, [totalPages])
    //#endregion

    //#region Handler
    const handlePrevPage = () => {
        if (currentPage > 1)
            onPageChange(currentPage - 1)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages)
            onPageChange(currentPage + 1)
    }

    const handlePageClick = (page: number) => {
        onPageChange(page)
    }
    //#endregion

    return (
        <div className='flex items-center justify-between mt-3'>
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5 rtl:-scale-x-100'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                    />
                </svg>

                <span>Previous</span>
            </button>

            <div className='items-center hidden lg:flex gap-x-3'>
                {
                    pages.map((page: number, i: number) => (
                        <button
                            key={i}
                            onClick={() => handlePageClick(page)}
                            className={`px-2 py-1 text-sm text-blue-500 rounded-md ${currentPage === page ? 'bg-blue-100/60 dark:bg-blue-900 dark:text-blue-200' : ''}`}
                        >
                            {page}
                        </button>
                    ))
                }
            </div>

            <button
                onClick={handleNextPage}
                disabled={totalPages === currentPage}
                className={`flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 ${totalPages === currentPage ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <span>Next</span>

                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5 rtl:-scale-x-100'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    />
                </svg>
            </button>
        </div>
    )
}

export default Pagination
