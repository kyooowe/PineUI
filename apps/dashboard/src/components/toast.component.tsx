//#region Import
import { useEffect } from 'react'
import { IToastProps } from '../interface/components/toast.interface'
import { motion } from 'framer-motion'
//#endregion

const Toast = ({ type, show, setShow, icon, message }: IToastProps) => {
    //#region UseEffect
    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setShow(false)
            }, 3000)
        }
    }, [show])
    //#endregion

    //#region Handler
    const handleBackgroundColor = () => {
        if (type === 'primary') return 'bg-blue-700 border-blue-600'

        if (type === 'danger') return 'bg-red-700 border-red-600'

        if (type === 'warning') return 'bg-yellow-700 border-yellow-600'

        if (type === 'success') return 'bg-green-700 border-green-600'
    }
    //#endregion

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 50 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ display: show ? 'block' : 'none' }}
            className='toast'
        >
            <div
                id='toast-simple'
                className={`flex border ${handleBackgroundColor()} items-center w-full max-w-xs p-4 space-x-4 text-white divide-x divide-white rounded-lg shadow space-x`}
                role='alert'
                style={{ fontSize: '0.875rem' }}
            >
                {icon}
                <div className='pl-4 text-sm font-normal'>{message}</div>
            </div>
        </motion.div>
    )
}

export default Toast
