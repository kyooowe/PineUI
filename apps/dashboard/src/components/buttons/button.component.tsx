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
     * Button UI will depend on this flag
     */
    solid?: boolean;

    /**
     * @description: button color will depends on this variants
     * @default: primary
     */
    variant: "primary" | "secondary" | "warning" | "danger";

    /**
     * @description: dynamic class
     */
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({ text, solid = true, ariaLabel, type = "button", variant = "primary",
    className, ...rest }: IButtonProps, ref) => {

    //#region Handler
    const handleColor = (): string => {
        if (solid) {
            if (variant === 'primary')
                return "bg-blue-700 hover:bg-blue-600 focus:ring-blue-500"

            if (variant === 'secondary')
                return "bg-green-700 hover:bg-green-600 focus:ring-green-500"


            if (variant === 'warning')
                return "bg-yellow-700 hover:bg-yellow-600 focus:ring-yellow-500"


            if (variant === 'danger')
                return "bg-red-700 hover:bg-red-600 focus:ring-red-500"
        }
        else {
            if (variant === 'primary')
                return "bg-blue-400 hover:bg-blue-300 focus:ring-blue-400"

            if (variant === 'secondary')
                return "bg-green-400 hover:bg-green-300 focus:ring-green-400"


            if (variant === 'warning')
                return "bg-yellow-400 hover:bg-yellow-300 focus:ring-yellow-400"


            if (variant === 'danger')
                return "bg-red-400 hover:bg-red-300 focus:ring-red-400"
        }

        return ""
    }

    const handleTextColor = (): string => {
        if (solid)
            return "text-white"
        else {
            if (variant === 'primary')
                return "text-blue-700"

            if (variant === 'secondary')
                return "text-green-700"

            if (variant === 'warning')
                return "text-yellow-700"

            if (variant === 'danger')
                return "text-red-700"
        }

        return ""
    }
    //#endregion

    // Add the className props to override using twMerge
    const buttonClass = twMerge(`px-6 py-3 text-sm font-medium tracking-wide capitalize 
    transition-colors duration-300 transform rounded-lg ${handleTextColor()} ${handleColor()} 
    focus:outline-none focus:ring focus:ring-opacity-50`, className)

    return (
        <button
            ref={ref}
            className={buttonClass}
            aria-label={ariaLabel}
            type={type}
            {...rest}
        >
            {text}
        </button>
    )
})

export default Button