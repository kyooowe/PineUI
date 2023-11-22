//#region Import
import { memo } from 'react'
import { IStatsDisplay } from '@interface/stats.interface'
import { IDashboardStudents } from '@interface/modules/dashboard/dashboard.interface'
import StatCard from '@components/cards/stat-cards.component'
import Card from '@/components/cards/cards.component'
import InitialAvatar from '@/components/avatar/initial-avatar.component'
import MockTimeLine from '@/components/timeline/mock-timeline.component'
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

const Analytics = memo(() => {

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
            <div className='grid grid-cols-3 gap-4 mt-5'>
                <div className='col-span-4 lg:col-span-2'>
                    <Card className='dark:bg-slate-900' body={
                        <ul className="space-y-5">

                            <li className="w-xl flex gap-x-2 sm:gap-x-4 me-11">
                                <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
                                    <InitialAvatar initial="PX" alt="demo alt text" size="md" />
                                </span>

                                <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                                    <p className="text-sm text-white">
                                        What's Pine UI?
                                    </p>
                                </div>
                            </li>

                            <li className="w-xl flex gap-x-2 sm:gap-x-4 me-11">
                                <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
                                    <InitialAvatar initial="PX" alt="demo alt text" size="md" />
                                </span>
                                <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                                    <p className="text-sm text-gray-800 dark:text-white">
                                        A comprehensive and user-friendly boilerplate, providing developers with an extensive range of components and features.
                                    </p>
                                    <div className="space-y-1.5">
                                        <ul>
                                            <li>
                                                <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/kyooowe/PineUI">
                                                    Installation and Framework Guide
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="w-xl flex gap-x-2 sm:gap-x-4 me-11">
                                <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
                                    <InitialAvatar initial="PX" alt="demo alt text" size="md" />
                                </span>

                                <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                                    <p className="text-sm text-white">
                                        How about the features?
                                    </p>
                                </div>
                            </li>

                            <li className="w-xl flex gap-x-2 sm:gap-x-4 me-11">
                                <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
                                    <InitialAvatar initial="PX" alt="demo alt text" size="md" />
                                </span>

                                <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                                    <p className="text-sm text-gray-800 dark:text-white">
                                        This innovative project showcases a comprehensive range of powerful and cutting-edge features, seamlessly integrating the following capabilities:
                                    </p>
                                    <div className="space-y-1.5">
                                        <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                                            <li className="text-sm text-gray-800 dark:text-white">
                                                Responsive Layout.
                                            </li>
                                            <li className="text-sm text-gray-800 dark:text-white">
                                                Student Management (CRUD).
                                            </li>
                                            <li className="text-sm text-gray-800 dark:text-white">
                                                Custom Components based on TailwindCSS.
                                            </li>
                                            <li className="text-sm text-gray-800 dark:text-white">
                                                Developer experience improved with ESLint, Prettier, and Husky.
                                            </li>
                                            <li className="text-sm text-gray-800 dark:text-white">
                                                Effortlessly create and generate services with utmost convenience and efficiency using Pine UI X.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="w-xl flex gap-x-2 sm:gap-x-4 me-11">
                                <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
                                    <InitialAvatar initial="PX" alt="demo alt text" size="md" />
                                </span>

                                <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                                    <p className="text-sm text-gray-800 dark:text-white">
                                        Stay tuned! We've got a lot in store with ongoing developments, new components, templates, and exciting improvements on the horizon. There's much more to come!
                                    </p>
                                </div>
                            </li>

                        </ul>
                    } />
                </div>
                <div className='col-span-4 lg:col-span-1'>
                    <Card className='dark:bg-slate-900'
                        body={
                            <MockTimeLine />
                        }
                    />
                </div>
            </div>
        </div>
    )
})

export default Analytics
