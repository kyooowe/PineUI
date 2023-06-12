//#region Import
import { Suspense, lazy, memo, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Cookies from 'js-cookie'
import { useAccountStore } from '@zustand/account.store'
import CenterLoader from '@components/center-loader.component'

const Sidebar = lazy(() => import('./sidebar'))
const Navbar = lazy(() => import('./navbar'))
//#endregion

const Layout = memo(() => {

    //#region State
    const navigate = useNavigate()
    const location = useLocation()
    //#endregion

    //#region Zustand
    const zustandStoreAccount = useAccountStore((state) => state.storeAccount)
    //#endregion

    //#region UseEffect
    useEffect(() => {

        // Get token
        const token = Cookies.get('token')

        // Flagger
        if (token === undefined) {
            zustandStoreAccount(undefined)
            navigate('/')
        }

    }, [])
    //#endregion

    return (
        <Suspense fallback={<CenterLoader />}>
            <div className="bg-gray-50 min-h-screen dark:bg-slate-900">

                <Sidebar />
                <Navbar />

                <div className="w-full h-auto py-10 px-4 lg:pl-80">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Outlet />
                    </motion.div>
                </div>
            </div>
            
        </Suspense>

    )
})

export default Layout
