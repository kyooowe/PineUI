//#region Import
import { Outlet } from 'react-router-dom'
//#endregion

const StudentPage = () => {
    return (
        <div className='px-9'>
            <div className='w-full min-w-[310px]'>
                <Outlet />
            </div>
        </div>
    )
}

export default StudentPage
