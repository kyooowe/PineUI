import { ReactNode } from 'react'

export interface IToast {
    type: 'primary' | 'success' | 'warning' | 'danger'
    show: boolean
    setShow: (show: boolean) => void
    icon: ReactNode
    message: string
}
