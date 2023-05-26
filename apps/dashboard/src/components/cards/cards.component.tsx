import React from "react";
import { ReactNode } from "react";

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
}

const Card = React.forwardRef<HTMLDivElement, ICard>(({ header, body, isPlain, ...rest }: ICard, ref) => {
    return (
        <div
            ref={ref}
            className="w-auto h-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:bg-gray-700 dark:border-gray-500"
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