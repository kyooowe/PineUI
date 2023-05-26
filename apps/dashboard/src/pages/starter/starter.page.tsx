//#region Import
import { Suspense, lazy } from "react"
import CenterLoader from "../../components/center-loader.component"

const Main = lazy(() => import('../../modules/starter/starter.module'))
//#endregion

const StarterPage = () => {

    return (
        <Suspense fallback={<CenterLoader />}>
            <div className="py-2 px-7">
                <Main />
            </div>
        </Suspense>
    )
}

export default StarterPage
