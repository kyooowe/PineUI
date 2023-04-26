//#region Import
import { IStatsDisplay } from '../../interface/stats.interface'
import LineChart from '../../components/line-chart.component'
import Card from '../../components/cards.component'
import { useMemo } from 'react'
import { IDashboardStudents } from '../../interface/modules/dashboard/dashboard.interface'

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

const students: IDashboardStudents[] = [
    {
        img: 'avatar-1',
        name: 'Sevim Caroline',
        email: 'svvmcaroline01@gmail.com'
    },
    {
        img: 'avatar-2',
        name: 'Klara Moirrey',
        email: 'dogcatoof@gmail.com'
    },
    {
        img: 'avatar-3',
        name: 'Vilko Ami',
        email: 'ima_vilko_kr@gmail.com',
    },
    {
        img: 'avatar-4',
        name: 'Goranka Ianuarius',
        email: 'hipsterforver24@gmail.com'
    },
    {
        img: 'avatar-5',
        name: 'Yanick Faisal',
        email: 'lifesalyanick@gmail.com'
    },

]
//#endregion

const DashboardPage = () => {

    //#region UseMemo
    const ChartCardHeader = useMemo(() => {
        return (
            <div className="flex items-center justify-between">
                <span className="text-md font-light text-gray-600 dark:text-white">Line Chart</span>
                <div className="relative max-w-sm ml-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="date" className="w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                </div>
            </div>
        )
    }, [])

    const ChartCardBody = useMemo(() => {
        return (
            <LineChart />
        )
    }, [])

    const StudentCardHeader = useMemo(() => {
        return (
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600 dark:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>


                <a href="#">
                    <h5 className="text-xl ml-5 font-semibold tracking-tight text-gray-900 dark:text-white">Latest Students</h5>
                </a>
            </div>
        )
    }, [])

    const StudentCardBody = useMemo(() => {
        return (
            <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
                {
                    students.map((student: IDashboardStudents, i: number) => (
                        <li className='w-full py-3' key={i}>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={`/avatars/${student.img}.jpg`} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {student.name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {student.email}
                                    </p>
                                </div>
                                <div className="text-gray-900 dark:text-white">
                                    <p>$320</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }, [])

    const LatestCardHeader = useMemo(() => {
        return (
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600 dark:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>

                <a href="#">
                    <h5 className="text-xl ml-5 font-semibold tracking-tight text-gray-900 dark:text-white">News</h5>
                </a>
            </div>
        )
    }, [])

    const LatestCardBody = useMemo(() => {
        return (
            <p className='text-gray-600 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed magna id turpis iaculis commodo. Fusce eu mi eget metus tempor semper. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse varius, metus quis dictum ullamcorper, dui nibh egestas lectus, vel venenatis elit sapien sed ex. Quisque imperdiet mi id est congue sagittis.</p>
        )
    }, [])
    //#endregion

    //#region Handler
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
    //#endregion

    return (
        <div className='py-2 px-7'>
            <div className='w-full min-w-[310px]'>
                <div className='flex flex-col gap-2 lg:flex-row xl:flex-row'>
                    {
                        ItemsDisplay.map((items: IStatsDisplay, i: number) => (
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
                        ))
                    }
                </div>

                <div className='flex flex-col gap-2 lg:flex-row xl:flex-row mt-2'>
                    <div className="flex-1 basis-2/4 w-auto">
                        <Card header={ChartCardHeader} body={ChartCardBody} isPlain={true} />
                    </div>
                    <div className="flex-1 basis-1/4 w-auto">
                        <div className="flex flex-col">
                            <div className='flex-1'>
                                <Card header={StudentCardHeader} body={StudentCardBody} isPlain={true} />
                            </div>
                            <div className='flex-1 mt-2 h-10'>
                                <Card header={LatestCardHeader} body={LatestCardBody} isPlain={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
