import React, { ReactNode, useEffect } from 'react'
import { twMerge } from 'tailwind-merge';

interface IPopAlertProps {

    /**
    * @description: title of the alert
    */
    title: string;

    /**
    * @description: text of the alert
    */
    text: string;

    /**
    * @description: dynamic class
    */
    className?: string;

    /**
     * @description: alert color will depends on this variants
     * @default: primary
     */
    variant: "primary" | "secondary" | "warning" | "danger";

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

const PopAlert = React.forwardRef<HTMLDivElement, IPopAlertProps>(({ title, text, variant, className,
    delay = 1500, awake = false, show = false, setShow, icon }, ref) => {

    // UseEffect
    useEffect(() => {
        if (show && !awake)
            setTimeout(() => {
                setShow(false)
            }, delay)
    }, [show])


    const handleColor = (): string => {
        if (variant === 'primary')
            return "bg-blue-700"

        if (variant === 'secondary')
            return "bg-green-700"


        if (variant === 'warning')
            return "bg-yellow-700"


        if (variant === 'danger')
            return "bg-red-700"

        return ""
    }

    const handleTextColor = (): string => {
        if (variant === 'primary')
            return "text-blue-700"

        if (variant === 'secondary')
            return "text-blue-700"


        if (variant === 'warning')
            return "text-blue-700"


        if (variant === 'danger')
            return "text-blue-700"

        return ""
    }

    const popAlertClass = twMerge(`${show ? 'flex' : 'hidden'} overflow-hidden bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-700 dark:bg-gray-800`, className)
    const parentPopAlertClass = twMerge(`flex items-center justify-center w-12 ${handleColor()}`, "")
    const spanPopAlertClass = twMerge(`font-bold ${handleTextColor()}`, "")

    return (
        <div
            ref={ref}
            className={popAlertClass}
        >
            <div className={parentPopAlertClass}>
                <div className="text-white">
                    {icon}
                </div>
            </div>

            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className={spanPopAlertClass}>{title}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">{text}</p>
                </div>
            </div>
        </div>
    )
})

export default PopAlert