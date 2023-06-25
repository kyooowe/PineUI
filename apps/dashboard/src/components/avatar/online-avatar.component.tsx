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
    src: string;

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
     * @description: Dynamic class of the image parent div
     */
    parentClassName?: string;

    /**
     * @description: Dynamic class of the image
     */
    className?: string;
}

const OnlineAvatar = React.forwardRef<HTMLImageElement, IAvatarProps>(({ alt, src, size, hasRing = false, parentClassName, className }: IAvatarProps, ref) => {

    // Handler
    const handleImageSize = (): string => {
        if (size === 'xs')
            return "w-6 h-6"

        if (size === 'sm')
            return "w-8 h8"

        if (size === 'md')
            return "w-10 h-10"

        if (size === 'lg')
            return "w-12 h-12"

        if (size === "xl")
            return "w-16 h-16"

        return ""
    }

    const handleGreenDotSize = (): string => {
        if (size === 'xs')
            return "h-1.5 w-1.5"

        if (size === 'sm')
            return "h-2 w-2"

        if (size === 'md')
            return "h-2.5 w-2.5"

        if (size === 'lg')
            return "h-2.5 w-2.5"

        if (size === "xl")
            return "w-3 h-3"

        return ""
    }

    const parentClass = twMerge('relative', parentClassName)
    const imageClass = twMerge(`object-cover ${handleImageSize()} rounded-full ${hasRing ? "ring ring-gray-400 dark:ring-gray-500" : ""}`, className)
    const greenDotClass = twMerge(`${handleGreenDotSize()} rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0`)

    return (
        <div className={parentClass}>
            <img
                ref={ref}
                className={imageClass}
                src={src}
                alt={alt}
                loading='lazy'
                width="600"
                height="400"
            />
            <span className={greenDotClass}></span>
        </div>
    )
})

export default OnlineAvatar