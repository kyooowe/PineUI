//#region Import
import { memo } from 'react'
import PreviewCardsHightligher from '@/components/cards/preview-card.component'
import Select from '@/components/select/select.component'
import { useDarkModeConfigStore } from '@/zustand/config.store'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveLight, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
//#endregion

const SelectComponentBlock = memo(() => {

    //#region State Helper
    const columns: string[] = ['Props', 'Type', 'Description']
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    //#endregion

    //#region Select Body
    const handleSelectBody = () => {
        return (
            <div className='flex-row p-2 gap-2'>
                <Select
                    name="slctDemo"
                    value="John Doe"
                    ariaLabel="slctDemo"
                    className='w-full'
                    items={
                        [
                            { name: 'Mary Doe', value: 'Mary Doe' },
                            { name: 'John Doe', value: 'John Doe' },
                        ]
                    }
                />
                <Select
                    name="slctDemo"
                    value="John Doe"
                    ariaLabel="slctDemo"
                    hasError={true}
                    className='w-full mt-2'
                    items={
                        [
                            { name: 'Mary Doe', value: 'Mary Doe' },
                            { name: 'John Doe', value: 'John Doe' },
                        ]
                    }
                />
            </div>
        )
    }
    //#endregion

    //#region Rows
    const handleSelectRows = (name: string) => {
        if (name === 'Plain')
            return [
                { props: "name", type: "String", desc: "The name of the Select." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Select." },
                { props: "className?", type: "String", desc: "A dynamic class for the Select component." },
                { props: "value", type: "String", desc: "The select option of the Select." },
                { props: "hasError?", type: "Boolean", desc: "Determines whether the Select has an error by displaying a red border." },
                { props: "items", type: "Array of { name: 'Demo', value: 'Demo Value' }", desc: "The items of the Select." },
            ];
    }
    //#endregion

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>
            <div className='mb-4 col-span-4 md:col-span-3'>
                <div className='flex-row'>
                    <div>
                        <span className='text-4xl font-bold'>Select</span>
                    </div>
                    <div className='mb-5 mt-2'>
                        <span>A flexible custom select component allowing users to select option with customizable features and behaviors.</span>
                    </div>
                    <SyntaxHighlighter
                        language="typescript"
                        style={zustandDarkModeConfig ? darcula : atelierCaveLight}
                        wrapLongLines={true}
                        customStyle={{
                            borderRadius: '10px'
                        }}
                    >
                        import Select from '@/components/select/select.component'
                    </SyntaxHighlighter>
                </div>

                <PreviewCardsHightligher
                    title="Input Text"
                    className='mt-5'
                    body={handleSelectBody()}
                    code={`// Plain \n<Select name="slctDemo" value="John Doe" ariaLabel="slctDemo" items={Array here}/> \n\n// With Errors \n<Select name="slctDemo" value="John Doe" ariaLabel="slctDemo" hasError={true} items={Array here}/>`}
                    columns={columns}
                    rows={handleSelectRows("Plain")}
                />
            </div>
            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">ON THIS PAGE</p>

                    <p className="mt-2 text-blue-600 font-bold">Variants</p>
                    <p className="ml-4">Default Select</p>
                </div>
            </div>
        </div>
    )
})

export default SelectComponentBlock