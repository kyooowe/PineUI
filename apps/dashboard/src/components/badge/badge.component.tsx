import React from 'react'
import { twMerge } from 'tailwind-merge';

interface IBadgeProps {

    /**
     * @description: label of the Badge
     */
    text: string;

    /**
     * @description: Badge color will depends on this variants
     */
    color: 'blue' | 'green' | 'gray' | 'red' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'white'

    /**
     * @description: Badge UI will depend on this flag.
     * @default true
     */
    solid?: boolean;

    /**
     * @description: dynamic class
     */
    className?: string;
}


const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>(({ text, color, solid = true, className }: IBadgeProps, ref) => {

    // Handler
    const handleColor = (): string => {

        console.log(solid)

        if (solid) {
            if (color === 'blue')
                return "bg-blue-500"

            if (color === 'green')
                return "bg-green-500"

            if (color === 'gray')
                return "bg-gray-500"

            if (color === 'red')
                return "bg-red-500"

            if (color === 'yellow')
                return "bg-yellow-500"

            if (color === 'indigo')
                return "bg-indigo-500"

            if (color === 'purple')
                return "bg-purple-500"

            if (color === 'pink')
                return "bg-pink-500"

            if (color === 'white')
                return "bg-white"
        }
        else {
            if (color === 'blue')
                return "bg-blue-200"

            if (color === 'green')
                return "bg-green-200"

            if (color === 'gray')
                return "bg-gray-200"

            if (color === 'red')
                return "bg-red-200"

            if (color === 'yellow')
                return "bg-yellow-200"

            if (color === 'indigo')
                return "bg-indigo-200"

            if (color === 'purple')
                return "bg-purple-200"

            if (color === 'pink')
                return "bg-pink-200"

            if (color === 'white')
                return "bg-gray-50"
        }

        return ""
    }

    const handleTextColor = (): string => {
        if (solid)
            if(color === 'white')
                return "text-black"
            else
                return "text-white"
        else {
            if (color === 'blue')
                return "text-blue-800"

            if (color === 'green')
                return "text-green-800"

            if (color === 'gray')
                return "text-gray-800"

            if (color === 'red')
                return "text-red-800"

            if (color === 'yellow')
                return "text-yellow-800"

            if (color === 'indigo')
                return "text-indigo-800"

            if (color === 'purple')
                return "text-purple-800"

            if (color === 'pink')
                return "text-pink-800"

            if (color === 'white')
                return "text-gray-600"
        }

        return ""
    }

    const badgeClass = twMerge(`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${handleColor()} ${handleTextColor()}`, className)

    return (
        <span ref={ref} className={badgeClass}>{text}</span>
    )
})

export default Badge