import React, { SelectHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {

    /**
     * @description: name of the text input
     */
    name: string;

    /**
    * @description: value of the text input
    */
    value?: string;

    /**
     * @description: accesible name of the text input
     */
    ariaLabel: string;

    /**
     * @description: check if the text input has error
     */
    hasError?: boolean;

    /**
     * @description: dynamic class
     */
    className?: string;

    /**
     * @description: items to be shown as option
     */
    items: {
        value: string;
        name: string;
    }[]
}

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(({ name, value,
    ariaLabel, hasError = false, className, items, ...rest }: ISelectProps, ref) => {

    // Add the className props to override using twMerge
    const selectClass = twMerge(`py-2.5 pl-4 pr-5 text-sm placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-20
    ${hasError ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-300 dark:border-red-400 dark:bg-gray-800 dark:text-red-400 dark:focus:border-red-300'
            : 'border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500'
        }
    `, className)

    return (
        <select
            ref={ref}
            name={name}
            aria-label={ariaLabel}
            defaultValue={value}
            className={selectClass}
            {...rest}
        >
            {
                items.map(({value, name}, i: number) => (
                    <option key={i} value={value}>{name}</option>
                ))
            }
        </select>
    )
})

export default Select