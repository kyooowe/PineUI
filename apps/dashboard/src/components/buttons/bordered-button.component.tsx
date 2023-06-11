import React, { ButtonHTMLAttributes } from 'react'
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
    variant: "primary" | "secondary" | "warning" | "danger";

    /**
     * @description: Show loader svg in Button
     * @default: false
     */
    isLoading?: boolean;

    /**
     * @description: Disable the button
     * @default: false
     */
    isDisabled?: boolean;

    /**
     * @description: dynamic class
     */
    className?: string;
}

const BorderedButton = React.forwardRef<HTMLButtonElement, IButtonProps>(({ text, ariaLabel, type = "button", variant = "primary",
    isLoading, isDisabled, className, ...rest }: IButtonProps, ref) => {

    //#region Handler
    const handleColor = (): string => {
        if (isDisabled) {
            if (variant === 'primary')
                return "text-blue-300 border border-blue-300"

            if (variant === 'secondary')
                return "text-green-300 border border-green-300"


            if (variant === 'warning')
                return "text-yellow-300 border border-yellow-300"

            if (variant === 'danger')
                return "text-red-300 border border-red-300"
        }
        else {
            if (variant === 'primary')
                return "text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white"

            if (variant === 'secondary')
                return "text-green-500 border border-green-500 hover:bg-green-500 hover:text-white"


            if (variant === 'warning')
                return "text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white"

            if (variant === 'danger')
                return "text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
        }

        return ""
    }

    const handleLoaderColor = (): string => {
        if (variant === 'primary')
            return "text-blue-300"

        if (variant === 'secondary')
            return "text-green-300"


        if (variant === 'warning')
            return "text-yellow-300"

        if (variant === 'danger')
            return "text-red-300"

        return ""

    }
    //#endregion

    // Add the className props to override using twMerge
    const buttonClass = twMerge(`px-6 py-3 text-sm font-medium tracking-wide capitalize 
    transition-colors duration-300 transform rounded-lg ${handleColor()} 
    focus:outline-none focus:ring focus:ring-opacity-50 ${isDisabled ? 'cursor-not-allowed' : ''}`, className)
    const loaderTextClass = twMerge(`animate-spin mr-3 inline-block w-4 h-4 border-[3px] border-current border-t-transparent rounded-full ${handleLoaderColor()}`)

    return (
        <button
            ref={ref}
            className={buttonClass}
            aria-label={ariaLabel}
            type={type}
            disabled={isDisabled}
            {...rest}
        >
            {
                isLoading ? (
                    <div className='inline-flex'>
                        <span className={loaderTextClass} role="status" aria-label="loading"></span>
                        {text}
                    </div>
                ) : (
                    text
                )
            }
        </button>
    )
})

export default BorderedButton