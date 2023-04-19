//#region Import
import httpRequest from '../config/api.config'
import { IResponse } from '../interface/response.interface'
import Cookies from 'js-cookie'
import useCrypto from './crypto.hooks'

const { decrypt } = useCrypto()
//#endregion

const useApi = () => {

    // Get the encrypted token
    const encryptedToken = Cookies.get('token') as string

    // Decrypt if not undefined then assign as token
    const token = encryptedToken === undefined ? '' : decrypt(encryptedToken)

    const get = async <T>(url: string, anonymous = false) => {
        return await httpRequest.get<void, IResponse<T>>(url, {
            headers: { Authorization: anonymous ? '' : `Bearer ${token}` },
        })
    }

    const post = async <T>(url: string, payload: object, anonymous = false) => {
        return await httpRequest.post<void, IResponse<T>>(url, payload, {
            headers: { Authorization: anonymous ? '' : `Bearer ${token}` },
        })
    }

    const put = async <T>(url: string, payload: object, anonymous = false) => {
        return await httpRequest.put<void, IResponse<T>>(url, payload, {
            headers: { Authorization: anonymous ? '' : `Bearer ${token}` },
        })
    }

    const remove = async <T>(url: string, anonymous = false) => {
        return await httpRequest.delete<void, IResponse<T>>(url, {
            headers: { Authorization: anonymous ? '' : `Bearer ${token}` },
        })
    }

    return { get, post, put, remove, checkTokenExpirationMiddleWare }
}

export default useApi
