import { memo } from "react"
import { ICard } from "../interface/components/card.interface";

const Card = memo(({ header, body, isPlain = false }: ICard) => {
    return (
        <div className="w-auto h-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:bg-gray-700 dark:border-gray-500">
            <div className={`px-5 py-5 ${isPlain ? '' : ' border-b dark:border-gray-500'}`}>
                {header}
            </div>
            <div className="px-5 py-2">
                {body}
            </div>
        </div>
    )
})

export default Card;