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

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({ text, ariaLabel, type = "button", variant = "primary",
    isLoading, isDisabled, className, ...rest }: IButtonProps, ref) => {

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
        }
        else {
            if (variant === 'primary')
                return "bg-blue-700 hover:bg-blue-600 focus:ring-blue-500"

            if (variant === 'secondary')
                return "bg-green-700 hover:bg-green-600 focus:ring-green-500"


            if (variant === 'warning')
                return "bg-yellow-700 hover:bg-yellow-600 focus:ring-yellow-500"


            if (variant === 'danger')
                return "bg-red-700 hover:bg-red-600 focus:ring-red-500"
        }

        return ""
    }
    //#endregion

    // Add the className props to override using twMerge
    const buttonClass = twMerge(`text-white px-6 py-3 text-sm font-medium tracking-wide capitalize 
    transition-colors duration-300 transform rounded-lg ${handleColor()} 
    focus:outline-none focus:ring focus:ring-opacity-50 ${isDisabled ? 'cursor-not-allowed' : ''}`, className)

    return (
        <button
            ref={ref}
            className={buttonClass}
            aria-label={ariaLabel}
            type={type}
            {...rest}
            disabled={isDisabled}
        >
            {
                isLoading ? (
                    <div className='inline-flex'>
                        <span className="animate-spin mr-3 inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                        {text}
                    </div>
                ) : (
                    text
                )
            }
        </button>
    )
})

export default Button