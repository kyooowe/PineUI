//#region Import
import { Suspense, lazy } from "react"
import CenterLoader from "@/components/loader/center-loader.component"

const Analytics = lazy(() => import('@modules/dashboard/dashboard.module'))
//#endregion

const DashboardPage = () => {

    return (
        <Suspense fallback={<CenterLoader />}>
            <div className="px-4">
                <Analytics />
            </div>
        </Suspense>
    )
}

export default DashboardPage
