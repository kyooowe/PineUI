import { Outlet } from "react-router-dom"

const ComponentsBlock = () => {
    return (
        <div className='px-4'>
            <div className='w-full min-w-[310px]'>
                <Outlet />
            </div>
        </div>
    )
}

export default ComponentsBlock