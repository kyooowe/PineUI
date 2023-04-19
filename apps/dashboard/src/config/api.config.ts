//#region Import
import axios from 'axios'
import Cookies from 'js-cookie'
import * as CryptoJS from 'crypto-js'
import jwt_decode from 'jwt-decode';
import { IResponse } from '../interface/response.interface';
//#endregion

// global axios settings
const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

// global http response interceptor
httpRequest.interceptors.request.use((request) => {

    // Get the encrypted token
    const encryptedToken = Cookies.get('token') as string
    const encryptedAccessToken = Cookies.get('access_token') as string

    // Decrypt if not undefined then assign as token
    const token = encryptedToken === undefined ? '' : CryptoJS.AES.decrypt(encryptedToken, import.meta.env.VITE_CRYPTO_KEY).toString(CryptoJS.enc.Utf8)

    if (token !== '') {

        // Decode Token
        const decodedToken = jwt_decode(token) as { exp: number }

        // Get expiration and current time
        const expirationTime: number = decodedToken.exp * 1000; // Convert to milliseconds
        const currentTime: number = Date.now();

        // Check time remaining
        const timeLeft: number = expirationTime - currentTime;

        // Validation
        if (timeLeft < 0) {

            // When token expired
            // Create Headers that submit access token
            const headers = new Headers()
            headers.append('accesstoken', CryptoJS.AES.decrypt(encryptedAccessToken, import.meta.env.VITE_CRYPTO_KEY).toString(CryptoJS.enc.Utf8))

            fetch(`${import.meta.env.VITE_API_URL}auth/accessToken`, {
                method: 'GET',
                headers: headers
            })
                .then(response => response.json())
                .then((result: IResponse<string>) => {

                    if (result.statusCode === 200) {
                        Cookies.set('token', CryptoJS.AES.encrypt(result.data, import.meta.env.VITE_CRYPTO_KEY).toString())
                    }
                    else {
                        Cookies.remove('token')
                        Cookies.remove('access_token')
                        location.replace('/')
                    }

                })
        }
    }

    return request
})

httpRequest.interceptors.response.use(
    (response) => {
        // return data from a response if the API call is success
        return response.data
    },
    (error) => {
        // return message from a response of API call, or error message from axios, or the error itself in string, if the API call is failed.
        const message =
            error.response?.data?.message || error.message || error.toString()
        return Promise.reject(message)
    }
)

export default httpRequest
