import React, { InputHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {

    /**
     * @description: name of the text input
     */
    name: string;

    /**
    * @description: value of the text input
    */
    value?: string;

    /**
    * @description: value of the text input
    * @default: NA
    */
    placeholder?: string;

    /**
     * @description: accesible name of the text input
     */
    ariaLabel: string;

    /**
     * @description: check if the text input is disabled
     */
    disabled?: boolean;

    /**
     * @description: check if the text input only allowed read
     */
    readonly?: boolean;

    /**
     * @description: check if the text input has error
     */
    hasError?: boolean;

    /**
     * @description: adding icon in text input
     */
    icon: ReactNode;

    /**
     * @description: dynamic class
     */
    className?: string;

    /**
     * @description: dynamic class for parent
     */
    parentClassName?: string;
}

const IconTextInput = React.forwardRef<HTMLInputElement, ITextInputProps>(({ name, value, placeholder,
    ariaLabel, disabled = false, readOnly = false, hasError = false, icon, className, parentClassName, ...rest }: ITextInputProps, ref) => {

    const handleBGChecker = () => {
        if (hasError)
            return 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-300 dark:border-red-400 dark:bg-gray-800 dark:text-red-400 dark:focus:border-red-300'

        if (disabled)
            return 'border-gray-100 dark:bg-gray-600 dark:text-white dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500'

        return 'border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500'
    }

    // Add the className props to override using twMerge
    const textInputClass = twMerge(`py-2.5 pl-11 pr-5 rtl:pr-11 rtl:pl-5 text-sm placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-20 ${handleBGChecker()}`, className)

    const parentTextInputClass = twMerge('relative flex items-center', parentClassName)

    return (
        <div className={parentTextInputClass}>
            <span className='absolute mx-3'>
                {icon}
            </span>

            <input
                ref={ref}
                name={name}
                disabled={disabled}
                readOnly={readOnly}
                aria-label={ariaLabel}
                type='text'
                placeholder={placeholder === undefined ? '' : placeholder}
                value={value === undefined ? '' : value}
                className={textInputClass}
                {...rest}
            />
        </div>
    )
})

export default IconTextInput