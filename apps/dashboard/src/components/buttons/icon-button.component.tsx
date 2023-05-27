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
    variant: "primary" | "secondary" | "warning" | "danger";

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
    className, icon, ...rest }: IButtonProps, ref) => {

    //#region Handler
    const handleColor = (): string => {
        if (variant === 'primary')
            return "bg-blue-700 hover:bg-blue-600 focus:ring-blue-500"

        if (variant === 'secondary')
            return "bg-green-700 hover:bg-green-600 focus:ring-green-500"


        if (variant === 'warning')
            return "bg-yellow-700 hover:bg-yellow-600 focus:ring-yellow-500"


        if (variant === 'danger')
            return "bg-red-700 hover:bg-red-600 focus:ring-red-500"

        return ""
    }
    //#endregion

    // Add the className props to override using twMerge
    const buttonClass = twMerge(`flex items-center px-6 py-3 text-sm font-medium tracking-wide text-white capitalize 
    transition-colors duration-300 transform rounded-lg ${handleColor()} 
    focus:outline-none focus:ring focus:ring-opacity-50`, className)

    return (
        <button
            ref={ref}
            className={buttonClass}
            aria-label={ariaLabel}
            type={type}
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