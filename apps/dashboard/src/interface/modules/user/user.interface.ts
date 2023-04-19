import { IBase } from '../base.interface'

// Response
export interface IUser extends IBase {
    _id: string
    email: string
    firstName: string
    middleName: string
    lastName: string
}

// Request
