//#region Import
import { memo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CSideBarMenu } from '../utils/constant/sidebar.constant'
import { ISelectableChildPath, ISidebarMenu } from '@interface/components/sidebar.interface'
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs.component'
//#endregion

const SideBar = memo(() => {

    //#region State Helper
    const location = useLocation()

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    //#endregion

    //#region Handler
    const handleToggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleSVG = (name: string) => {
        if (name === 'Dashboard')
            return (
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            )

        if (name === 'CRUD')
            return (
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            )

        if (name === 'Starter')
            return (
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            )

        if (name === 'Components')
            return (
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            )
    }

    const handleActiveLink = (childPath: string[]) => {
        const isExisting = childPath.filter((x) => x === location.pathname)

        if (isExisting.length !== 0) return true

        return false
    }
    //#endregion

    return (
        <>
            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center py-4">
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-600"
                        data-hs-overlay="#application-sidebar"
                        aria-controls="application-sidebar"
                        aria-label="Toggle navigation"
                        onClick={handleToggleSideBar}
                    >
                        <span className="sr-only">Toggle Navigation</span>
                        <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>

                    <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
                        <Breadcrumbs />
                    </ol>
                </div>
            </div>

            <div
                id="application-sidebar"
                className="h-screen text-gray-700 hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
            >
                <div className='px-6 flex flex-row'>
                    <span className="flex-none bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-violet-600 text-xl font-bold">Pine UI - MERN</span>
                    <span className='ml-3'>🚀</span>
                </div>
                <hr className='mt-3.5 border-1 border-gray-300 dark:border-gray-600' />

                <nav className="hs-accordion-group p-6 w-full relative" data-hs-accordion-always-open>
                    {
                        CSideBarMenu.map((menu: ISidebarMenu, i: number) => (
                            <ul className="space-y-1.5" role='tablist' key={i}>
                                {
                                    menu.selectableChildPath === undefined ? (
                                        <li role='tab'>
                                            <Link
                                                to={menu.path}
                                                className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:text-blue-500 ${handleActiveLink(menu.childPath) ? 'text-blue-500 dark:text-blue-600' : 'dark:hover:text-blue-600 dark:text-gray-400'}`}
                                            >
                                                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    {handleSVG(menu.name)}
                                                </svg>
                                                {menu.name}
                                            </Link>
                                        </li>
                                    ) : (
                                        <li
                                            className="hs-accordion"
                                            id="account-accordion"
                                            role="tab"
                                        >
                                            <p className="hs-accordion-toggle cursor-pointer flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-500 hs-accordion-active:hover:bg-transparent text-sm text-gray-700 rounded-md hover:text-blue-500 dark:bg-gray-800 dark:hover:text-blue-500 dark:text-slate-400 dark:hs-accordion-active:text-white">
                                                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    {handleSVG(menu.name)}
                                                </svg>
                                                {menu.name}

                                                <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                                </svg>

                                                <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                                </svg>
                                            </p>

                                            <div id="account-accordion-sub" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                                <ul className="pt-2 pl-7" role='tablist'>
                                                    {
                                                        menu.selectableChildPath.map((childMenu: ISelectableChildPath, iChild: number) => (
                                                            <li
                                                                role="tab"
                                                                key={iChild}
                                                            >
                                                                <Link
                                                                    to={childMenu.path}
                                                                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:text-blue-500 ${iChild === 0 ? '' : 'mt-1'} ${handleActiveLink([childMenu.path]) ? 'text-blue-600 dark:text-blue-600 dark:text-white' : 'dark:hover:text-blue-500 dark:text-slate-400'}`}
                                                                >
                                                                    {childMenu.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        ))
                    }
                </nav>
            </div>
        </>
    )
})

export default SideBar
