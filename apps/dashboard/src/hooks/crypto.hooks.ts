//#region Imports
import * as CryptoJS from 'crypto-js'
//#endregion

const useCrypto = () => {
    const encrypt = (value: string) => {
        return CryptoJS.AES.encrypt(
            value,
            import.meta.env.VITE_CRYPTO_KEY
        ).toString()
    }

    const decrypt = (value: string) => {
        const bytes = CryptoJS.AES.decrypt(
            value,
            import.meta.env.VITE_CRYPTO_KEY
        )
        return bytes.toString(CryptoJS.enc.Utf8)
    }

    return { encrypt, decrypt }
}

export default useCrypto
