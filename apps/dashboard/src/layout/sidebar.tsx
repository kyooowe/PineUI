//#region Import
import { memo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CSideBarMenu } from '../utils/constant/sidebar.constant'
import { ISidebarMenu } from '../interface/components/sidebar.interface'
import { useAccountStore } from '../zustand/account.store'
import Cookies from 'js-cookie'
//#endregion

interface ISidebar {
    toggleSideBar: boolean
}

const SideBar = memo(({ toggleSideBar }: ISidebar) => {

    //#region State Helper
    const location = useLocation()
    const navigate = useNavigate()
    const zustandStoreAccount = useAccountStore((state) => state.storeAccount)
    //#endregion

    //#region Handler
    const handleSVG = (name: string) => {
        if (name === 'Dashboard')
            return (
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
                />
            )

        if (name === 'CRUD')
            return (
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                />
            )

        if (name === 'Accounts')
            return (
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
                />
            )

        if (name === 'Starter')
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
            )

        if (name === 'Components')
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                />

            )
    }

    const handleLogOut = () => {
        zustandStoreAccount(undefined)
        Cookies.remove('token')
        Cookies.remove('access_token')
        navigate('/')
    }

    const handleActiveLink = (childPath: string[]) => {
        const isExisting = childPath.filter((x) => x === location.pathname)

        if (isExisting.length !== 0) return true

        return false
    }
    //#endregion

    return (
        <aside
            className={`flex flex-col h-screen bg-blue-700 shadow-xl px-5 py-8 overflow-y-auto fixed border-r rtl:border-r-0 rtl:border-l 
                        dark:bg-gray-900 dark:border-gray-700 transition-width transition-slowest ease ${toggleSideBar ? 'w-72' : 'hidden'
                }`}
        >
            <a href='#' aria-label='logo'>
                <img
                    className='w-auto h-7'
                    src='/logo.svg'
                    alt=''
                    loading='lazy'
                />
            </a>

            <div className='flex flex-col justify-between flex-1 mt-6'>
                <div className='relative items-center'>
                    <span className='absolute top-2'>
                        <svg
                            xmlns='httpw://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6 mx-3 text-white dark:text-gray-500'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                        </svg>
                    </span>

                    <input
                        type='text'
                        placeholder='Search here..'
                        className='block w-full py-2 text-white placeholder-white bg-blue-600 border border-blue-500 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>

                <nav className='flex-1 space-y-3 mt-8'>
                    {
                        CSideBarMenu.map((menu: ISidebarMenu, i: number) => (
                            <Link
                                to={menu.path}
                                key={i}
                                aria-label='navigateToDashboard'
                                className={`flex items-center px-3 py-3 text-blue-100 transition-colors duration-100 transform rounded-lg dark:text-gray-300 ${handleActiveLink(menu.childPath)
                                    ? 'text-blue-100 bg-blue-600 dark:bg-gray-800 dark:text-gray-200'
                                    : 'hover:text-blue-100 hover:bg-blue-500 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='w-5 h-5'
                                >
                                    {handleSVG(menu.name)}
                                </svg>

                                <span className='mx-2 text-sm font-medium'>
                                    {menu.name}
                                </span>
                            </Link>
                        ))
                    }
                </nav>

                <div className='mt-6'>
                    {/* New Feature */}
                    <div className='p-3 bg-gray-100 rounded-lg dark:bg-gray-800'>
                        <h2 className='text-sm font-medium text-gray-800 dark:text-white'>
                            New feature available!
                        </h2>

                        <p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Natus harum officia eligendi velit.
                        </p>

                        <img
                            className='object-cover w-full h-32 mt-2 rounded-lg'
                            src='https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80'
                            alt=''
                        />
                    </div>
                    <hr className='mt-5 border-1 border-blue-500 dark:border-gray-500' />
                    <div className='flex items-center justify-between mt-6'>
                        <a
                            href='#'
                            aria-label='avatar'
                            className='flex items-center gap-x-2'
                        >
                            <img
                                className='object-cover rounded-full h-7 w-7'
                                src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80'
                                alt='avatar'
                            />
                            <span className='text-sm font-medium text-white dark:text-gray-200'>
                                John Doe
                            </span>
                        </a>

                        <button
                            type='button'
                            onClick={() => handleLogOut()}
                            aria-label='navigateToLogin'
                            className='text-white transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400'
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
                                    d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
})

export default SideBar
