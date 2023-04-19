import { create } from 'zustand'
import { IApplicationConfig } from '../interface/config.interface'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useDarkModeConfigStore = create<IApplicationConfig>()(
    persist(
        (set) => ({
            isDarkMode: true,
            storeIsDarkMode: (value: boolean) => {
                set({ isDarkMode: value })
            },
        }),
        { name: 'config', storage: createJSONStorage(() => localStorage) }
    )
)
