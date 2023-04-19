import { lazy } from 'react'

//#region Import
const LoginModule = lazy(() => import('../../modules/auth/login.module'))
//#endregion

const AuthPage = () => {
    return <LoginModule />
}

export default AuthPage
