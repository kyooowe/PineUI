import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface IStatCardProps {
    /**
     * @description: header of the card
     */
    title: string;

    /**
     * @description: body of the card
     */
    body: string;

    /**
     * @description: icon to be showned 
     */
    icon: ReactNode;

    /**
     * @description: increased text display
     */
    percentage: string;

    /**
     * @description: determine if the percentage increased or decreased
     * @default: true
     */
    isIncreased: boolean;

    /**
     * @description: text to be shown when hover in tooltip
     */
    toolTip?: string;

    /**
     * @description: dynamic class of the card
     */
    className?: string;
}


const StatCard = React.forwardRef<HTMLDivElement, IStatCardProps>(({ title, body, icon, percentage, isIncreased, toolTip, className }: IStatCardProps, ref) => {
    
    const statCardClass = twMerge('flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700', className)
    
    return (
        <div 
        ref={ref}
        className={statCardClass}
        >
            <div className="p-4 md:p-5 flex gap-x-4">
                <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800">
                    {icon}
                </div>

                <div className="grow">
                    <div className="flex items-center gap-x-2">
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                            {title}
                        </p>
                        {
                            toolTip === undefined ? "" : (
                                <div className="hs-tooltip">
                                    <div className="hs-tooltip-toggle">
                                        <svg className="w-3.5 h-3.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                        </svg>
                                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                                            {toolTip}
                                        </span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                        <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                            {body}
                        </h3>
                        {
                            isIncreased ? (
                                <span className="inline-flex items-center gap-0.5 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
                                    <svg className="-ml-1 inline-block w-5 h-5 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                                    </svg>
                                    <span className="inline-block text-xs font-medium">
                                        {percentage}%
                                    </span>
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-0.5 py-0.5 px-2 rounded-full bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100">
                                    <svg className="-ml-1 inline-block w-5 h-5 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <span className="inline-block text-xs font-medium">
                                        {percentage}%
                                    </span>
                                </span>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default StatCard