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
     * @description: Dynamic class of the image
     */
    className?: string;
}

const Avatar = React.forwardRef<HTMLImageElement, IAvatarProps>(({ alt, src, size, hasRing = false, className }: IAvatarProps, ref) => {

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

    const imageClass = twMerge(`object-cover ${handleImageSize()} rounded-full ${hasRing ? "ring ring-gray-400 dark:ring-gray-500" : ""}`, className)

    return (
        <img
            ref={ref}
            className={imageClass}
            src={src}
            alt={alt}
            loading='eager'
            width="600"
            height="400"
        />
    )
})

export default Avatar