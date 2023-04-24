//#region Import
import { IStatsDisplay } from '../../interface/stats.interface'
//#endregion

//#region Constant
const ItemsDisplay: IStatsDisplay[] = [
    {
        name: 'Students',
        count: 300,
        increase: '13',
    },
    {
        name: 'Employees',
        count: 51,
        increase: '3',
    },
    {
        name: 'Revenue',
        count: 10,
        increase: '5',
    },
    {
        name: 'Profit',
        count: 10,
        increase: '5',
    },
]
//#endregion

const DashboardPage = () => {
    
    const handleSVG = (name: string) => {
        if (name === 'Students')
            return (
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                />
            )

        if (name === 'Employees')
            return (
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
                />
            )

        if (name === 'Revenue')
            return (
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                />
            )

        if (name === 'Profit')
            return (
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3'
                />
            )
    }

    return (
        <div className='py-2 px-7'>
            <div className='w-full min-w-[310px]'>
                <div className='flex flex-col gap-1 lg:flex-row xl:flex-row'>
                    {ItemsDisplay.map((items: IStatsDisplay, i: number) => (
                        <div className='flex-1 w-auto' key={i}>
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:bg-gray-700 dark:border-gray-500'>
                                <div className='p-4'>
                                    <div className='flex items-center'>
                                        <div className='flex-1'>
                                            <span className='text-sm font-semibold text-gray-600 dark:text-white uppercase'>
                                                {items.name}
                                            </span>
                                            <h3 className='text-2xl text-black dark:text-white font-bold'>
                                                {items.count}
                                            </h3>
                                        </div>
                                        <div className='flex-none'>
                                            <div className='bg-blue-600 text-white dark:text-white rounded-full p-3'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    className='w-6 h-6'
                                                >
                                                    {handleSVG(items.name)}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-2 flex items-center'>
                                        <span className='inline-block bg-green-600 text-white dark:text-white text-xs font-medium rounded-full px-2 py-1'>
                                            <div className='flex flex-row'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    className='w-5'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
                                                    />
                                                </svg>

                                                <span
                                                    className='ml-1 text-xs font-semibold dark:text-white'
                                                    style={{ marginTop: '2px' }}
                                                >
                                                    {items.increase}%
                                                </span>
                                            </div>
                                        </span>

                                        <span className='text-xs text-gray-600 dark:text-white ml-2'>
                                            Since last year
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
