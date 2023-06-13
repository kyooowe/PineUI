import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    /**
     * @description: label of the button
     */
    text: string;

    /**
     * @description: accesible name of the button
     */
    ariaLabel: string;

    /**
     * @description: types of button
     * @default: button
     */
    type: "submit" | "button";

    /**
     * @description: button color will depends on this variants
     * @default: primary
     */
    variant: "primary" | "secondary" | "warning" | "danger" | "plain";

    /**
     * @description: Disable the button
     * @default: false
     */
    isDisabled?: boolean;

    /**
     * @description: dynamic class
     */
    className?: string;

    /**
     * @description: icon of the button
     */
    icon: ReactNode;
}

const IconedButton = React.forwardRef<HTMLButtonElement, IButtonProps>(({ text, ariaLabel, type = "button", variant = "primary",
    isDisabled, className, icon, ...rest }: IButtonProps, ref) => {

    //#region Handler
    const handleColor = (): string => {
        if (isDisabled) {
            if (variant === 'primary')
                return "bg-blue-300"

            if (variant === 'secondary')
                return "bg-green-300"


            if (variant === 'warning')
                return "bg-yellow-300"


            if (variant === 'danger')
                return "bg-red-300"

            if (variant === 'plain')
                return "bg-gray-200 dark:bg-gray-600"
        }
        else {
            if (variant === 'primary')
                return "text-white bg-blue-700 hover:bg-blue-600 focus:ring-blue-500"

            if (variant === 'secondary')
                return "text-white bg-green-700 hover:bg-green-600 focus:ring-green-500"


            if (variant === 'warning')
                return "text-white bg-yellow-700 hover:bg-yellow-600 focus:ring-yellow-500"


            if (variant === 'danger')
                return "text-white bg-red-700 hover:bg-red-600 focus:ring-red-500"

            if (variant === 'plain')
                return "text-gray-700 bg-white border border-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        }

        return ""
    }
    //#endregion

    // Add the className props to override using twMerge
    const buttonClass = twMerge(`flex items-center px-6 py-3 text-sm font-medium tracking-wide capitalize 
    transition-colors duration-300 transform rounded-lg ${handleColor()} 
    focus:outline-none focus:ring focus:ring-opacity-50 ${isDisabled ? 'cursor-not-allowed' : ''}`, className)

    return (
        <button
            ref={ref}
            className={buttonClass}
            aria-label={ariaLabel}
            type={type}
            disabled={isDisabled}
            {...rest}
        >
            {icon}
            <span className='mx-3'>
                {text}
            </span>
        </button>
    )
})

export default IconedButton