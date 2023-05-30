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
    size: "sm" | "md" | "lg" | "xl";

    /**
     * @description: Name of the user
     */
    name: string;

    /**
     * @description: Email of the user
     */
    email: string;

    /**
     * @description: Dynamic class of the image
     */
    className?: string;
}

const ProfileAvatar = React.forwardRef<HTMLImageElement, IAvatarProps>(({ alt, src, size, name, email, className }: IAvatarProps, ref) => {

    // Handler
    const handleImageSize = (): string => {
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

    const handleTextSize = (): string => {
        if (size === 'sm')
            return "text-base"

        if (size === 'md')
            return "text-lg"

        if (size === 'lg')
            return "text-xl"

        if (size === "xl")
            return "text-xl"

        return ""
    }

    const profileAvatarClass = twMerge('flex items-center gap-x-2', className)
    const imageProfileAvatarClass = twMerge(`${handleImageSize()} object-cover rounded-full`)
    const textProfileAvatarClass = twMerge(`${handleTextSize()} font-semibold text-gray-700 capitalize dark:text-white`)

    return (
        <div
            ref={ref}
            className={profileAvatarClass}
        >
            <img
                className={imageProfileAvatarClass}
                src={src}
                alt={alt}
                loading='lazy'
            />

            <div>
                <h1 className={textProfileAvatarClass}>{name}</h1>
                <p className="text-base text-gray-500 dark:text-gray-400">{email}</p>
            </div>
        </div>
    )
})

export default ProfileAvatar