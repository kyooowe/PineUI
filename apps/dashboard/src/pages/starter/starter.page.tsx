//#region Import
import { Suspense, lazy } from "react"
import CenterLoader from "@/components/loader/center-loader.component"

const Main = lazy(() => import('@modules/starter/starter.module'))
//#endregion

const StarterPage = () => {

    return (
        <Suspense fallback={<CenterLoader />}>
            <div className="px-4">
                <Main />
            </div>
        </Suspense>
    )
}

export default StarterPage
