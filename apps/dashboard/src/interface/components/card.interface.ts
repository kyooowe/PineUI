import { ReactNode } from 'react'

export interface ICard {
    header: ReactNode;
    body: ReactNode;
    isPlain?: boolean;
}