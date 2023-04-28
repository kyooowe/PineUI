//#region Import
import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Components
import Layout from '../layout/layout'
import Loader from '../components/loader.component'
import CenterLoader from '../components/center-loader.component'
import StudentUpdate from '../modules/student/student_update.module'

// Page
const ErrorPage = lazy(() => import('../pages/error.page'))
const LoginPage = lazy(() => import('../pages/auth/auth.page'))
const DasboardPage = lazy(() => import('../pages/dashboard/dashboard.page'))
const StudentPage = lazy(() => import('../pages/students/student.page'))
const StarterPage = lazy(() => import('../pages/starter/starter.page'))

// Student Module
const StudentModule = lazy(
    () => import('../modules/student/student_list.module')
)
const StudentCreate = lazy(
    () => import('../modules/student/student_create.module')
)

//#endregion

// Config
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<CenterLoader />}>
                <LoginPage />
            </Suspense>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: 'pages',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'dashboard',
                element: (
                    <Suspense fallback={<Loader />}>
                        <DasboardPage />
                    </Suspense>
                ),
            },
            {
                path: 'students',
                element: (
                    <Suspense fallback={<Loader />}>
                        <StudentPage />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: 'list',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <StudentModule />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'create',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <StudentCreate />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'update',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <StudentUpdate />
                            </Suspense>
                        )
                    }
                ],
            },
            {
                path: 'starter',
                element: (
                    <Suspense fallback={<Loader />}>
                        <StarterPage />
                    </Suspense>
                )
            }
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
])

export default router
