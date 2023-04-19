//#region Import
import { memo, useEffect } from 'react'
import { useDarkModeConfigStore } from '../zustand/config.store'
import Breadcrumbs from '../components/breadcrumbs.component'
//#endregion

interface INavbar {
    toggleSideBar: boolean
    setToggleSideBar: (value: boolean) => void
}

const Navbar = memo(({ toggleSideBar, setToggleSideBar }: INavbar) => {
    //#region State Helper
    const zustandDarkModeConfig = useDarkModeConfigStore(
        (state) => state.isDarkMode
    )
    const zustandStoreDarkModeConfig = useDarkModeConfigStore(
        (state) => state.storeIsDarkMode
    )
    //#endregion

    //#region UseEffect
    useEffect(() => {
        if (zustandDarkModeConfig) document.body.classList.add('dark')
        else document.body.classList.remove('dark')
    }, [zustandDarkModeConfig])
    //#endregion


    //#region Handler
    const handleDarkMode = () => {
        zustandStoreDarkModeConfig(!zustandDarkModeConfig)
    }
    //#endregion

    return (
        <div className='flex items-center justify-between px-4 py-6 md:px-10 bg-white dark:bg-gray-900'>
            <Breadcrumbs />
            <div className='flex'>
                <div className='relative items-center block md:hidden'>
                    <button
                        type='button'
                        aria-label='toggler'
                        onClick={() => setToggleSideBar(!toggleSideBar)}
                        className='text-gray-600 hover:text-gray-500 ml-4 mt-2 focus:gray-500 focus:outline-none'
                    >
                        <svg
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='menu w-6 h-6'
                        >
                            <path
                                fillRule='evenodd'
                                d='M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2.75 9.5C2.33579 9.5 2 9.83579 2 10.25C2 10.6642 2.33579 11 2.75 11H17.25C17.6642 11 18 10.6642 18 10.25C18 9.83579 17.6642 9.5 17.25 9.5H2.75ZM2 14.25C2 13.8358 2.33579 13.5 2.75 13.5H17.25C17.6642 13.5 18 13.8358 18 14.25C18 14.6642 17.6642 15 17.25 15H2.75C2.33579 15 2 14.6642 2 14.25Z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </div>

                <button
                    className='md:block text-gray-600 transition-colors duration-300 transform hidden dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
                    aria-label='darkModeToggler'
                    onClick={() => handleDarkMode()}
                >
                    <svg
                        className='w-6 h-6'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        {zustandDarkModeConfig ? (
                            <path
                                strokeLinecap='round'
                                stroke='currentColor'
                                strokeLinejoin='round'
                                d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                            />
                        ) : (
                            <path
                                strokeLinecap='round'
                                stroke='currentColor'
                                strokeLinejoin='round'
                                d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                            />
                        )}
                    </svg>
                </button>
            </div>
        </div>
    )
})

export default Navbar
