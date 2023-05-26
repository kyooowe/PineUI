import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    /**
     * @description: dynamic class
     */
    className?: string;
}

const FacebookButton = React.forwardRef<HTMLButtonElement, IButtonProps>(({ className, ...rest }: IButtonProps, ref) => {

    // Add the className props to override using twMerge
    const facebookButtonClass = twMerge(`flex items-center justify-center px-6 py-2 text-gray-600 transition-colors duration-300 
    transform border rounded-lg dark:border-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600`, className)

    return (
        <button
            ref={ref}
            aria-label='signInGoogle'
            type="button"
            className={facebookButtonClass}
            {...rest}
        >
            <svg width="40px" height="28px" viewBox="0 0 256 256">
                <title>Facebook</title>
                <g>
                    <path d="M256,128 C256,57.3075 198.6925,0 128,0 C57.3075,0 0,57.3075 0,128 C0,191.8885 46.80775,244.8425 108,254.445 L108,165 L75.5,165 L75.5,128 L108,128 L108,99.8 C108,67.72 127.1095,50 156.3475,50 C170.35175,50 185,52.5 185,52.5 L185,84 L168.8595,84 C152.95875,84 148,93.86675 148,103.98925 L148,128 L183.5,128 L177.825,165 L148,165 L148,254.445 C209.19225,244.8425 256,191.8885 256,128" fill="#1877F2"></path>
                    <path d="M177.825,165 L183.5,128 L148,128 L148,103.98925 C148,93.86675 152.95875,84 168.8595,84 L185,84 L185,52.5 C185,52.5 170.35175,50 156.3475,50 C127.1095,50 108,67.72 108,99.8 L108,128 L75.5,128 L75.5,165 L108,165 L108,254.445 C114.51675,255.4675 121.196,256 128,256 C134.804,256 141.48325,255.4675 148,254.445 L148,165 L177.825,165" fill="#FFFFFF"></path>
                </g>
            </svg>

            <span className='mx-2'>
                Sign in with Facebook
            </span>
        </button>
    )
})

export default FacebookButton