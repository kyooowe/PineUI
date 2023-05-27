import ButtonComponentBlock from "./button.component-block.module"
import TextInputComponentBlock from "./text-input.component-block.module"
import AlertComponentBlock from "./alert.component-block.module"

const ComponentsBlockList = () => {

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>

            {/* Button */}
            <div className='mb-4 col-span-4 md:col-span-3'>
                
                <ButtonComponentBlock />
                <TextInputComponentBlock />
                <AlertComponentBlock />
            </div>

            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">ON THIS PAGE</p>

                    {/* Button */}
                    <p className="text-blue-600 font-bold">Buttons</p>
                    <p className="ml-4">Default Button</p>
                    <p className="ml-4">Iconed Button</p>
                    <p className="ml-4">Custom Button</p>

                    {/* Text Input */}
                    <p className="mt-2 text-blue-600 font-bold">Text Inputs</p>
                    <p className="ml-4">Default Text Input</p>
                    <p className="ml-4">Iconed Text Input</p>

                    {/* Alert */}
                    <p className="mt-2 text-blue-600 font-bold">Alerts</p>
                    <p className="ml-4">Default Alert</p>
                    <p className="ml-4">Iconed Alert</p>
                    <p className="ml-4">Notification Alert</p>
                    <p className="ml-4">Pop Alert</p>

                </div>
            </div>
        </div>
    )
}

export default ComponentsBlockList