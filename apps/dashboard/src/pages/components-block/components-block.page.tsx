//#region Import
import ComponentsBlockList from '../../modules/components-block/component-blocks.module'
//#endregion

const ComponentsBlock = () => {
    return (
        // <div className="py-2 px-7">
        //     <ComponentsBlockList />
        // </div>

        <div className='py-2 px-7'>
            <div className='w-full min-w-[310px]'>
                <ComponentsBlockList />
            </div>
        </div>
    )
}

export default ComponentsBlock