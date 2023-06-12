//#region Import
import { create } from 'zustand'
import { IAccountStore } from '@/interface/modules/auth/auth.interface'
import { createJSONStorage, persist } from 'zustand/middleware'
import useCrypto from '@hooks/crypto.hooks'
import { IUser } from '@interface/modules/user/user.interface'

const { encrypt } = useCrypto()
//#endregion

export const useAccountStore = create<IAccountStore>()(
    persist(
        (set) => ({
            account: '',
            storeAccount: (data?: IUser) => {
                if (data === undefined) set({ account: '' })
                else {
                    const encryptedData = encrypt(JSON.stringify(data))
                    set({ account: encryptedData })
                }
            },
        }),
        { name: 'acc', storage: createJSONStorage(() => localStorage) }
    )
)
