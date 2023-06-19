//#region Import
import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Components
import Layout from '@layout/layout'
import Loader from '@components/loader.component'
import CenterLoader from '@components/center-loader.component'
import StudentUpdate from '@modules/student/student_update.module'

// Page
const ErrorPage = lazy(() => import('@pages/error.page'))
const LoginPage = lazy(() => import('@pages/auth/auth.page'))
const DasboardPage = lazy(() => import('@pages/dashboard/dashboard.page'))
const StudentPage = lazy(() => import('@pages/students/student.page'))
const ComponentsBlockpage = lazy(() => import('@pages/components-block/components-block.page'))
const StarterPage = lazy(() => import('@pages/starter/starter.page'))

// Student Module
const StudentListModule = lazy(
    () => import('@modules/student/student_list.module')
)
const StudentCreateModule = lazy(
    () => import('@modules/student/student_create.module')
)

// Components Block
const AlertModule = lazy(
    () => import('@modules/components-block/alert.component-block.module')
)
const AvatarModule = lazy(
    () => import('@modules/components-block/avatar.component-block.module')
)
const BadgeModule = lazy(
    () => import('@modules/components-block/badge.component-block.module')
)
const ButtonModule = lazy(
    () => import('@modules/components-block/button.component-block.module')
)
const TextInputModule = lazy(
    () => import('@modules/components-block/text-input.component-block.module')
)
const SelectModule = lazy(
    () => import('@modules/components-block/select.component-block.module')
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
                                <StudentListModule />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'create',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <StudentCreateModule />
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
                path: 'components',
                element: (
                    <Suspense fallback={<Loader />}>
                        <ComponentsBlockpage />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: 'alert',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <AlertModule />
                            </Suspense>
                        )
                    },
                    {
                        path: 'avatar',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <AvatarModule />
                            </Suspense>
                        )
                    },
                    {
                        path: 'badge',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <BadgeModule />
                            </Suspense>
                        )
                    },
                    {
                        path: 'button',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <ButtonModule />
                            </Suspense>
                        )
                    },
                    {
                        path: 'input',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <TextInputModule />
                            </Suspense>
                        )
                    },
                    {
                        path: 'select',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <SelectModule />
                            </Suspense>
                        )
                    }
                ]
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
