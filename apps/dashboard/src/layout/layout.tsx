//#region Import
import { memo, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import SideBar from './sidebar'
import Navbar from './navbar'
import Cookies from 'js-cookie'
import { useAccountStore } from '../zustand/account.store'
//#endregion

const Layout = memo(() => {

    //#region State
    const [toggleSideBar, setToggleSideBar] = useState<boolean>(true)
    const navigate = useNavigate()
    const location = useLocation()
    //#endregion

    //#region Zustand
    const zustandStoreAccount = useAccountStore((state) => state.storeAccount)
    //#endregion

    //#region UseEffect
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Change 768 to your desired mobile width
                setToggleSideBar(false)
            } else {
                setToggleSideBar(true)
            }
        }

        handleResize() // Call on first render
        window.addEventListener('resize', handleResize) // Add resize listener

        return () => window.removeEventListener('resize', handleResize) // Clean up listener
    }, [])

    useEffect(() => {

        // Get token
        const token = Cookies.get('token')
        
        // Flagger
        if(token === undefined) {
            zustandStoreAccount(undefined)
            navigate('/')
        }

    }, [])
    //#endregion

    return (
        <div className='bg-gray-100'>
            <div className='flex flex-col md:flex-row min-h-screen overflow-hidden'>
                <SideBar toggleSideBar={toggleSideBar} />

                <div
                    className={`flex flex-col flex-1 transition-width transition-slowest ease ${toggleSideBar ? 'pl-72' : 'pl-0'
                        }`}
                >
                    <Navbar
                        toggleSideBar={toggleSideBar}
                        setToggleSideBar={setToggleSideBar}
                    />

                    <main className='flex-1 p-1 bg-white dark:bg-black'>
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >

                            {/* Page */}
                            <Outlet />
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    )
})

export default Layout
