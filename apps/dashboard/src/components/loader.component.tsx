//#region Import
import { memo } from 'react'
import { motion } from 'framer-motion'
//#endregion

const Loader = memo(() => {
    return (
        <motion.div
            key='loginPage'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            <div className='py-2 px-7 mt-5'>
                <div className='rounded-lg'>
                    <div className='animate-pulse flex space-x-4'>
                        <div className='flex-1 space-y-6 py-1'>
                            <div className='h-20 bg-slate-700 rounded'></div>
                            <div className='space-y-3'>
                                <div className='grid grid-cols-3 gap-4 mb-6'>
                                    <div className='h-10 bg-slate-700 rounded col-span-2'></div>
                                    <div className='h-10 bg-slate-700 rounded col-span-1'></div>
                                </div>
                                <div className='h-24 bg-slate-700 rounded'></div>
                            </div>
                            <div className='space-y-3'>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='h-10 bg-slate-700 rounded col-span-1'></div>
                                    <div className='h-10 bg-slate-700 rounded col-span-1'></div>
                                    <div className='h-10 bg-slate-700 rounded col-span-1'></div>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='h-24 bg-slate-700 rounded col-span-1'></div>
                                    <div className='h-24 bg-slate-700 rounded col-span-2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
})

export default Loader
