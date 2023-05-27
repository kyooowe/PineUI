import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge';

interface INotificationAlertProps {

    /**
    * @description: text of the alert
    */
    text: string;

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
    * @description: image to be shown on the left side
    */
    image: string;
}

const NotificationAlert = React.forwardRef<HTMLDivElement, INotificationAlertProps>(({ text, image, className, show, setShow, delay = 1500, awake = false }: INotificationAlertProps, ref) => {

    // UseEffect
    useEffect(() => {
        if (show && !awake)
            setTimeout(() => {
                setShow(false)
            }, delay)
    }, [show])

    const notificationAlertClass = twMerge(`${show ? 'flex' : 'hidden'}  overflow-hidden h-14 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700`, className)

    return (
        <div className={notificationAlertClass}>
            <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

            <div className="flex items-center px-2 py-3">
                <img
                    className="object-cover w-10 h-10 rounded-full"
                    alt="User avatar"
                    src={image}
                    loading="lazy"
                />

                <div className="mx-3">
                    <p className="text-gray-600 dark:text-gray-200">
                        {text}
                    </p>
                </div>
            </div>

            <div className='ml-auto my-auto mr-5'>
                <button
                    type="button"
                    className="text-gray-500 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 hover:bg-gray-200 dark:hover:bg-gray-900"
                    aria-label="Close"
                    onClick={() => setShow(false)}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>

    )
})

export default NotificationAlert