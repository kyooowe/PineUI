import { IUser } from '../user/user.interface'

// Response
export interface IAuthResponse {
    user: IUser
    token: string
    accessToken: string
}

// Request
export interface ILoginCredentials {
    email: string
    password: string
}
