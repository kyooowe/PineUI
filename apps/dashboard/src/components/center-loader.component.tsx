//#region Import
import { memo } from 'react'
import { motion } from 'framer-motion'
import { ICenterLoaderProps } from '../interface/components/center-loader.interface'
//#endregion

const CenterLoader = memo(({ height = "h-screen" }: ICenterLoaderProps) => {
    return (
        <motion.div
            key='loginPage'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            <div className={`flex items-center justify-center ${height}`}>
                <div
                    className='animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full'
                    role='status'
                    aria-label='loading'
                >
                    <span className='sr-only'>Loading...</span>
                </div>
            </div>
        </motion.div>
    )
})

export default CenterLoader
