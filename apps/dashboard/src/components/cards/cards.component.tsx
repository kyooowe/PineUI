import React from "react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ICard {
    /**
     * @description: header of the card
     */
    header?: ReactNode;

    /**
     * @description: body of the card
     */
    body: ReactNode;

    /**
     * @description: remove the border of the header
     */
    isPlain?: boolean;

    /**
     * @description: dynamic class of card
     */
    className?: string;
}

const Card = React.forwardRef<HTMLDivElement, ICard>(({ header, body, isPlain, className, ...rest }: ICard, ref) => {

    const cardClass = twMerge('flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400', className)

    return (
        <div
            ref={ref}
            className={cardClass}
            {...rest}
        >
            {
                header === undefined ? "" : (
                    <div className={`px-5 py-3 ${isPlain ? '' : ' border-b dark:border-gray-500'}`}>
                        {header}
                    </div>
                )
            }
            <div className="px-5 py-2">
                {body}
            </div>
        </div>
    )
})

export default Card;