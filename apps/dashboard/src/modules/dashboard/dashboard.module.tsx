//#region Import
import { IStatsDisplay } from '@interface/stats.interface'
import Card from '@components/cards/cards.component'
import { useMemo } from 'react'
import { IDashboardStudents } from '@interface/modules/dashboard/dashboard.interface'
import StatCard from '@components/cards/stat-cards.component'

//#endregion

//#region Constant
const ItemsDisplay: IStatsDisplay[] = [
    {
        name: 'Demo',
        count: 300,
        increase: '13',
        isIncreased: true,
    },
    {
        name: 'Demo',
        count: 51,
        increase: '3',
        isIncreased: false,
    },
    {
        name: 'Demo',
        count: 10,
        increase: '5',
        isIncreased: true,
    },
    {
        name: 'Demo',
        count: 10,
        increase: '5',
        isIncreased: false,
    },
    {
        name: 'Demo',
        count: 10,
        increase: '5',
        isIncreased: false,
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

const Analytics = () => {

    //#region UseMemo
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

    return (
        <div className='w-full'>
            <div className='flex flex-col gap-2 lg:flex-row xl:flex-row'>
                {
                    ItemsDisplay.map((item: IStatsDisplay, i: number) => (
                        <StatCard
                            key={i}
                            className='w-full'
                            title={item.name}
                            body={item.count.toString()}
                            percentage={item.increase}
                            isIncreased={item.isIncreased}
                            toolTip='This is just a demo.'
                            icon={
                                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                </svg>
                            }
                        />
                    ))
                }
            </div>

            <div className='flex flex-col gap-2 lg:flex-row xl:flex-row mt-2'>

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
    )
}

export default Analytics
