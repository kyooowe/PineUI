import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface IImageCardProps {
	/**
	 * @description: title of the card
	 */
	title: string;

	/**
	 * @description: body of the card
	 */
	body: ReactNode;

	/**
	 * @description: iamge path to be displayed on card
	 */
	image: string;

	/**
	 * @description: time span text to be displayed at the bottom of the card
	 */
	timeSpan?: string;

	/**
	 * @description: image path to be displayed on card
	 * @default: false
	 */
	imageBottom?: boolean;

	/**
	 * @description: dynamic class of the card
	 */
	className?: string;
}

const ImageCard = React.forwardRef<HTMLDivElement, IImageCardProps>(({ title, body, image, timeSpan, imageBottom = false, className }: IImageCardProps, ref) => {

	const imageCardClass = twMerge('flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]', className)

	return (
		<div
			ref={ref}
			className={imageCardClass}
		>
			{
				!imageBottom ? (
					<img loading='lazy' className="w-16 md:w-32 lg:w-60 rounded-t-xl" src={image} alt="Image Description" />
				) : ""
			}
			<div className="p-4 md:p-5">
				<h3 className="text-lg font-bold text-gray-800 dark:text-white">
					{title}
				</h3>
				<p className="mt-1 text-gray-800 dark:text-gray-400">
					{body}
				</p>
				<p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
					{timeSpan === undefined ? "" : timeSpan}
				</p>
			</div>
			{
				imageBottom ? (
					<img loading='lazy' className="w-full h-auto rounded-t-xl" src="../docs/assets/img/500x300/img1.jpg" alt="Image Description" />
				) : ""
			}
		</div>
	)
})

export default ImageCard