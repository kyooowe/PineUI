import React, { useState } from 'react'
import TextInput from '../../components/text-input/text-input.component'
import IconTextInput from '../../components/text-input/icon-text-input.component'
import PreviewCardsHightligher from '../../components/cards/preview-card.component'

const TextInputComponentBlock = () => {

    // Columns
    const columns: string[] = ['Props', 'Type', 'Description']

    // State
    const [demoText, setDemoText] = useState<string>("This is demo text.")

    //#region Input
    const handleInputBody = () => {
        return (
            <div className="flex-row p-2 gap-2">
                <TextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                />

                <TextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full mt-2"
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
                <IconTextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
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

                <IconTextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    parentClassName="mt-2"
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

    const handleTextInputTableRows = (name: string) => {
        if (name === 'Plain')
            return [
                { props: "name", type: "String", desc: "The name of the Text Input." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Text Input." },
                { props: "className?", type: "String", desc: "A dynamic class for the Text Input component." },
                { props: "value", type: "String", desc: "The current value of the Text Input." },
                { props: "hasError?", type: "Boolean", desc: "Determines whether the Text Input has an error by displaying a red border." }
            ];

        if (name === 'Iconed')
            return [
                { props: "name", type: "String", desc: "The name of the Text Input." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Text Input." },
                { props: "className?", type: "String", desc: "A dynamic class for the Text Input component." },
                { props: "parentClassName?", type: "String", desc: "A dynamic class for the parent `<div>` element of the Text Input." },
                { props: "value", type: "String", desc: "The current value of the Text Input." },
                { props: "hasError?", type: "Boolean", desc: "Determines whether the Text Input should have a red border indicating an error." },
                { props: "icon", type: "ReactNode", desc: "The icon to be displayed on the left side of the Text Input." }
            ];
    }
    //#endregion

    return (
        <>
            <PreviewCardsHightligher
                title="Input Text"
                className="mt-5"
                description="Custom TextInput is a flexible input component allowing users to enter and edit text with customizable features and behaviors."
                body={handleInputBody()}
                code={`// Plain \n<TextInput name="Text" ariaLabel="Text" className="w-full" value="Text Input" /> \n\n// With Errors \n<TextInput name="Text" ariaLabel="Text" className="w-full" value="Text Input" hasError={true} />`}
                columns={columns}
                rows={handleTextInputTableRows("Plain")}
            />

            <PreviewCardsHightligher
                title="Iconed Input Text"
                className="mt-10"
                description="Custom TextInput is a flexible input component allowing users to enter and edit text with customizable features and behaviors."
                body={handleIconedInputBody()}
                code={`// Plain \n<TextInput name="Text" ariaLabel="Text" className="w-full" value="Text Input" icon={Icon Here} /> \n\n// With Errors \n<TextInput name="Text" ariaLabel="Text" className="w-full" value="Text Input" hasError={true} icon={Icon Here} />`}
                columns={columns}
                rows={handleTextInputTableRows("Iconed")}
            />

            <hr className="mt-10" />
        </>
    )
}

export default TextInputComponentBlock