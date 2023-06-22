import React from "react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IMainCard {
    /**
     * @description: header of the card
     */
    header: ReactNode;

    /**
     * @description: footer of the card
     */
    footer?: ReactNode;

    /**
     * @description: body of the card
     */
    body: ReactNode;

    /**
     * @description: dynamic class of card
     */
    className?: string;
}

const MainCard = React.forwardRef<HTMLDivElement, IMainCard>(({ header, footer, body, className, ...rest }: IMainCard, ref) => {

    const cardClass = twMerge('flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-900 dark:border-gray-800', className)

    return (
        <div
            ref={ref}
            className={cardClass}
            {...rest}
        >
            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-900 dark:border-gray-800">
                {header}
            </div>
            <div className="p-4 md:p-5">
                {body}
            </div>
            {
                footer === undefined ? (
                    ""
                ) : (
                    <div className="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-900 dark:border-gray-800">
                        {footer}
                    </div>
                )
            }
        </div>
    )
})

export default MainCard