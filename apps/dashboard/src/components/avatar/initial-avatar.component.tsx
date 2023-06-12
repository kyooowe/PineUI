import React from 'react'
import { twMerge } from 'tailwind-merge';

interface IAvatarProps {

    /**
     * @description: Alternative text of image
     */
    alt: string;

    /**
     * @description: Image path
     */
    initial: string;

    /**
     * @description: Size of the image
     */
    size: "xs" | "sm" | "md" | "lg" | "xl";

    /**
     * @description: Add border ring in Avatar
     * @default: false
     */
    hasRing?: boolean;

    /**
     * @description: Dynamic class of the image
     */
    className?: string;
}

const InitialAvatar = React.forwardRef<HTMLImageElement, IAvatarProps>(({ alt, initial, size, hasRing = false, className }: IAvatarProps, ref) => {

    // Handler
    const handleImageSize = (): string => {
        if (size === 'xs')
            return "w-6 h-6"

        if (size === 'sm')
            return "w-8 h-8"

        if (size === 'md')
            return "w-10 h-10"

        if (size === 'lg')
            return "w-12 h-12"

        if (size === "xl")
            return "w-16 h-16"

        return ""
    }

    const handleTextSize = (): string => {
        if (size === 'xs')
            return "text-xs"

        if (size === 'sm')
            return "text-sm"

        if (size === 'md')
            return "text-md"

        if (size === 'lg')
            return "text-lg"

        if (size === "xl")
            return "text-xl"

        return ""
    }

    const imageClass = twMerge(`inline-flex items-center justify-center bg-gray-600 ${handleImageSize()} rounded-full ${hasRing ? "ring ring-gray-400 dark:ring-gray-500" : ""}`, className)
    const initialClass = twMerge(`font-medium text-white leading-none ${handleTextSize()}`)

    return (
        <span className={imageClass}>
            <span className={initialClass}>{initial}</span>
        </span>
    )
})

export default InitialAvatar