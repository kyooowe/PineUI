import { memo, useMemo } from "react";
import Card from "../../components/cards.component";

const Main = memo(() => {

    //#region UseMemo
    const MainCardHeader = useMemo(() => {
        return (
            <p className="text-md font-light text-gray-600 dark:text-white">Starter Card</p>
        )
    }, [])

    const MainCardBody = useMemo(() => {
        return (
            <p className="text-md font-light text-gray-600 dark:text-white">Starter Body</p>
        )
    }, [])
    //#endregion

    return (
        <Card header={MainCardHeader} body={MainCardBody} />
    )
})

export default Main;