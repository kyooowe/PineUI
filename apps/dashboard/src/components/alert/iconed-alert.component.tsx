import React, { ReactNode, useEffect } from 'react'
import { twMerge } from 'tailwind-merge';

interface IAlertProps {

    /**
    * @description: title of the alert
    */
    title: string;

    /**
     * @description: text of the alert
     */
    text: string;

    /**
     * @description: alert color will depends on this variants
     * @default: primary
     */
    variant: "primary" | "secondary" | "warning" | "danger";

    /**
     * @description: dynamic class
     */
    className?: string;

    /**
     * @description: flagger of the alert when to show
     * @default: false
     */
    show: boolean;

    /**
     * @description: event function of show
     */
    setShow: (values: boolean) => void;

    /**
     * @description: timer when to hide the alert
     * @default: 1500
     */
    delay?: number;

    /**
     * @description: flagger of the alert, this will make the alert dont hide unless you click the close
     * @default: false
     */
    awake?: boolean;

    /**
     * @description: icon of the alert to be shown on the left side.
     */
    icon: ReactNode;
}

const IconedAlert = React.forwardRef<HTMLDivElement, IAlertProps>(({ title, text, variant, className,
    delay = 1500, awake = false, show = false, setShow, icon }: IAlertProps, ref) => {

    // UseEffect
    useEffect(() => {
        if (show && !awake)
            setTimeout(() => {
                setShow(false)
            }, delay)
    }, [show])

    //#region Handler
    const handleColor = (): string => {
        if (variant === 'primary')
            return "bg-blue-700 border border-blue-500"

        if (variant === 'secondary')
            return "bg-green-700 border border-green-500"


        if (variant === 'warning')
            return "bg-yellow-700 border border-yellow-500"


        if (variant === 'danger')
            return "bg-red-700 border border-red-500"

        return ""
    }

    const handleButtonColor = (): string => {
        if (variant === 'primary')
            return "bg-blue-700 focus:ring-blue-400 hover:bg-blue-800"

        if (variant === 'secondary')
            return "bg-green-700 focus:ring-green-400 hover:bg-green-800"


        if (variant === 'warning')
            return "bg-yellow-700 focus:ring-yellow-400 hover:bg-yellow-800"


        if (variant === 'danger')
            return "bg-red-700 focus:ring-red-400 hover:bg-red-800"

        return ""
    }
    //#endregion

    // State Helper
    const alertClass = twMerge(`p-4 mb-4 text-white rounded-lg ${handleColor()} ${show ? "flex" : "hidden"}`, className)
    const alertButtonClass = twMerge(`ml-auto -my-2 text-white rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 ${handleButtonColor()}`, "")

    return (
        <div
            ref={ref}
            className={alertClass}
            role="alert"
        >
            {icon}

            <div className="ml-3 text-sm">
                <span className='font-bold mr-2'>{title}!</span> {text}
            </div>
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

export default IconedAlert