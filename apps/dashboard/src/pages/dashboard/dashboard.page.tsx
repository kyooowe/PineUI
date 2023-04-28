//#region Import
import { Suspense, lazy } from "react"
import CenterLoader from "../../components/center-loader.component"

const Analytics = lazy(() => import('../../modules/dashboard/dashboard.module'))
//#endregion

const DashboardPage = () => {

    return (
        <Suspense fallback={<CenterLoader height="h-72" />}>
            <div className="py-2 px-7">
                <Analytics />
            </div>
        </Suspense>
    )
}

export default DashboardPage
