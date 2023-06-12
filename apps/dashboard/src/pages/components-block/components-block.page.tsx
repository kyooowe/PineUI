import { Outlet } from "react-router-dom"

const ComponentsBlock = () => {
    return (
        <div className='py-2 px-7'>
            <div className='w-full min-w-[310px]'>
                <Outlet />
            </div>
        </div>
    )
}

export default ComponentsBlock