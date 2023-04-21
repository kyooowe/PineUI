import { ReactNode } from 'react'

export interface IToastProps {
    type: 'primary' | 'success' | 'warning' | 'danger'
    show: boolean
    setShow: (show: boolean) => void
    icon: ReactNode
    message: string
}
