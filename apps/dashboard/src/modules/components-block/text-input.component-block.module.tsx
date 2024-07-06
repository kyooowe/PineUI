//#region Import
import { useState, memo } from 'react'
import TextInput from '@components/text-input/text-input.component'
import IconTextInput from '@components/text-input/icon-text-input.component'
import PreviewCardsHightligher from '@components/cards/preview-card.component'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveLight, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useDarkModeConfigStore } from '@/zustand/config.store'
//#endregion

const TextInputComponentBlock = memo(() => {

    //#region State Helper
    const columns: string[] = ['Props', 'Type', 'Description']
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    const [demoText, setDemoText] = useState<string>("")
    //#endregion

    // State

    //#region Input Body
    const handleInputBody = () => {
        return (
            <div className="flex-row p-2 gap-2">
                <h1 className='mb-1.5'>Default</h1>
                <TextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    placeholder='Demo text'
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                />

                <h1 className='mb-1.5 mt-3'>Readonly</h1>
                <TextInput
                    name="Text"
                    readOnly={true}
                    ariaLabel="Text"
                    className="w-full"
                    placeholder='Demo text'
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                />

                <h1 className='mb-1.5 mt-3'>Disabled</h1>
                <TextInput
                    name="Text"
                    disabled={true}
                    ariaLabel="Text"
                    className="w-full"
                    placeholder='Demo text'
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                />

                <h1 className='mb-1.5 mt-3'>Error</h1>
                <TextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    placeholder='Demo text'
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                    hasError={true}
                />
            </div>
        )
    }

    const handleIconedInputBody = () => {
        return (
            <div className="flex-row p-2 gap-2">
                <h1 className='mb-1.5'>Default</h1>
                <IconTextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    placeholder='Demo text'
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                        </svg>

                    }
                />

                <h1 className='mb-1.5 mt-3'>Readonly</h1>
                <IconTextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    placeholder='Demo text'
                    value={demoText}
                    readOnly={true}
                    onChange={(e) => setDemoText(e.target.value)}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                        </svg>

                    }
                />

                <h1 className='mb-1.5 mt-3'>Disabled</h1>
                <IconTextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    placeholder='Demo text'
                    value={demoText}
                    disabled={true}
                    onChange={(e) => setDemoText(e.target.value)}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                        </svg>

                    }
                />

                <h1 className='mb-1.5 mt-3'>Error</h1>
                <IconTextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    parentClassName="mt-2"
                    placeholder='Demo text'
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                    hasError={true}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                        </svg>

                    }
                />
            </div>
        )
    }
    //#endregion

    //#region Rows
    const handleTextInputTableRows = (name: string) => {
        if (name === 'Plain')
            return [
                { props: "name", type: "String", desc: "The name of the Text Input." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Text Input." },
                { props: "className?", type: "String", desc: "A dynamic class for the Text Input component." },
                { props: "value", type: "String", desc: "The value of the Text Input." },
                { props: "readOnly", type: "Boolean", desc: "Allowing to see its value but not change it directly" },
                { props: "disabled", type: "Boolean", desc: "Prevents users from changing the input's value or interacting with it altogether" },
                { props: "hasError?", type: "Boolean", desc: "Determines whether the Text Input has an error by displaying a red border." }
            ];

        if (name === 'Iconed')
            return [
                { props: "name", type: "String", desc: "The name of the Text Input." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Text Input." },
                { props: "className?", type: "String", desc: "A dynamic class for the Text Input component." },
                { props: "parentClassName?", type: "String", desc: "A dynamic class for the parent `<div>` element of the Text Input." },
                { props: "value", type: "String", desc: "The value of the Text Input." },
                { props: "readOnly", type: "Boolean", desc: "Allowing to see its value but not change it directly" },
                { props: "disabled", type: "Boolean", desc: "Prevents users from changing the input's value or interacting with it altogether" },
                { props: "hasError?", type: "Boolean", desc: "Determines whether the Text Input should have a red border indicating an error." },
                { props: "icon", type: "ReactNode", desc: "The icon to be displayed on the left side of the Text Input." }
            ];
    }
    //#endregion

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>
            <div className='mb-4 col-span-4 md:col-span-3'>
                <div className='flex-row'>
                    <div>
                        <span className='text-4xl font-bold'>Text Input</span>
                    </div>
                    <div className='mb-5 mt-2'>
                        <span>A flexible input component allowing users to enter and edit text with customizable features and behaviors.</span>
                    </div>
                    <SyntaxHighlighter
                        language="typescript"
                        style={zustandDarkModeConfig ? darcula : atelierCaveLight}
                        wrapLongLines={true}
                        customStyle={{
                            borderRadius: '10px'
                        }}
                    >
                        {`import TextInput from '@components/text-input/text-input.component' \nimport IconTextInput from '@components/text-input/icon-text-input.component'`}
                    </SyntaxHighlighter>
                </div>

                <PreviewCardsHightligher
                    title="Input Text"
                    className='mt-5'
                    body={handleInputBody()}
                    code={`// Plain \n<TextInput name="Text" ariaLabel="Text" className="w-full" value="Text Input" /> \n\n// With Errors \n<TextInput name="Text" ariaLabel="Text" className="w-full" value="Text Input" hasError={true} />`}
                    columns={columns}
                    rows={handleTextInputTableRows("Plain")}
                />

                <PreviewCardsHightligher
                    title="Iconed Input Text"
                    className="mt-5"
                    body={handleIconedInputBody()}
                    code={`// Plain \n<IconTextInput name="Text" ariaLabel="Text" className="w-full" value="Text Input" icon={Icon Here} /> \n\n// With Errors \n<IconTextInput name="Text" ariaLabel="Text" className="w-full" value="Text Input" hasError={true} icon={Icon Here} />`}
                    columns={columns}
                    rows={handleTextInputTableRows("Iconed")}
                />
            </div>
            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">ON THIS PAGE</p>

                    <p className="mt-2 text-blue-600 font-bold">Variants</p>
                    <p className="ml-4">Default Text Input</p>
                    <p className="ml-4">Iconed Text Input</p>
                </div>
            </div>
        </div>
    )
})

export default TextInputComponentBlock