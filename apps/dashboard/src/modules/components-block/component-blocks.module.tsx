import ButtonComponentBlock from "./button.component-block.module"
import TextInputComponentBlock from "./text-input.component-block.module"

const ComponentsBlockList = () => {

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>

            {/* Button */}
            <div className='col-span-4 md:col-span-3'>
                <ButtonComponentBlock />
                <TextInputComponentBlock />
            </div>

            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="text-blue-600 font-bold">Button</p>
                    <p className="ml-4">Iconed Buttons</p>
                    <p className="ml-4">Custom Buttons</p>

                    <p className="mt-2 text-blue-600 font-bold">Text Input</p>
                    <p className="ml-4">Iconed Text Input</p>
                </div>
            </div>
        </div>
    )
}

export default ComponentsBlockList