import React from "react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ICard {
    /**
     * @description: body of the card
     */
    body: ReactNode;

    /**
     * @description: dynamic class of card
     */
    className?: string;
}

const Card = React.forwardRef<HTMLDivElement, ICard>(({ body, className, ...rest }: ICard, ref) => {

    const cardClass = twMerge('flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400', className)

    return (
        <div
            ref={ref}
            className={cardClass}
            {...rest}
        >
            {body}
        </div>
    )
})

export default Card;