import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge';

interface IAlertProps {

    /**
     * Body of the alert.
     */
    body: React.ReactNode;

    /**
     * Alert color will depend on these variants.
     * @default "primary"
     */
    variant: "primary" | "secondary" | "warning" | "danger";

    /**
     * Alert UI will depend on this flag.
     * @default true
     */
    solid?: boolean;

    /**
     * Dynamic class
     */
    className?: string;

    /**
     * Flag to determine when to show the alert.
     * @default false
     */
    show: boolean;

    /**
     * Event function to control the visibility of the alert.
     */
    setShow: (value: boolean) => void;

    /**
     * Specifies the duration (in milliseconds) before the Alert automatically hides.
     * @default 1500
     */
    delay?: number;

    /**
     * If enabled, the Alert will always be visible unless the close button is clicked.
     * @default false
     */
    awake?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, IAlertProps>(({ body, variant, solid = true, className,
    delay = 1500, awake = false, show = false, setShow }: IAlertProps, ref) => {

    // UseEffect
    useEffect(() => {
        if (show && !awake)
            setTimeout(() => {
                setShow(false)
            }, delay)
    }, [show])

    //#region Handler
    const handleColor = (): string => {
        if (solid) {
            if (variant === 'primary')
                return "text-white bg-blue-700 border border-blue-700"

            if (variant === 'secondary')
                return "text-white bg-green-700 border border-green-700"


            if (variant === 'warning')
                return "text-white bg-yellow-700 border border-yellow-700"


            if (variant === 'danger')
                return "text-white bg-red-700 border border-red-700"
        }
        else {
            if (variant === 'primary')
                return "text-blue-700 bg-blue-300 border border-blue-300"

            if (variant === 'secondary')
                return "text-green-700 bg-green-300 border border-green-300"

            if (variant === 'warning')
                return "text-yellow-700 bg-yellow-300 border border-yellow-300"

            if (variant === 'danger')
                return "text-red-700 bg-red-300 border border-red-300"
        }

        return ""
    }

    const handleButtonColor = (): string => {
        if (solid) {
            if (variant === 'primary')
                return "bg-blue-700 focus:ring-blue-400 hover:bg-blue-800"

            if (variant === 'secondary')
                return "bg-green-700 focus:ring-green-400 hover:bg-green-800"


            if (variant === 'warning')
                return "bg-yellow-700 focus:ring-yellow-400 hover:bg-yellow-800"


            if (variant === 'danger')
                return "bg-red-700 focus:ring-red-400 hover:bg-red-800"
        }
        else {
            if (variant === 'primary')
                return "text-blue-600 focus:ring-blue-400 hover:bg-blue-400"

            if (variant === 'secondary')
                return "text-green-600 focus:ring-green-400 hover:bg-green-400"


            if (variant === 'warning')
                return "text-yellow-600 focus:ring-yellow-400 hover:bg-yellow-400"


            if (variant === 'danger')
                return "text-red-600 focus:ring-red-400 hover:bg-red-400"
        }

        return ""
    }
    //#endregion

    // State Helper
    const alertClass = twMerge(`text-sm rounded-lg p-4 ${handleColor()} ${show ? "flex" : "hidden"}`, className)
    const alertButtonClass = twMerge(`ml-auto -my-2 text-white rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 ${handleButtonColor()}`, "")

    return (
        <div
            ref={ref}
            className={alertClass}
            role='alert'
        >
            {body}
            <button
                type="button"
                className={alertButtonClass}
                aria-label="Close"
                onClick={() => setShow(false)}
            >
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    >
                    </path>
                </svg>
            </button>
        </div>
    )
})

export default Alert