import React from 'react'
import TextInput from '../../components/text-input/text-input.component'
import IconTextInput from '../../components/text-input/icon-text-input.component'
import PreviewCardsHightligher from '../../components/cards/preview-card.component'

const TextInputComponentBlock = () => {

    const columns: string[] = ['Props', 'Type', 'Description']

    //#region Input
    const handleInputBody = () => {
        return (
            <div className="p-2 gap-2">
                <TextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    value="Text Input"
                />

                <TextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full mt-2"
                    value="Text Input Error"
                    hasError={true}
                />
            </div>
        )
    }

    const handleIconedInputBody = () => {
        return (
            <div className="p-2 gap-2">
                <IconTextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    value="Text Input"
                    icon={
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                    }
                />

                <IconTextInput
                    name="Text"
                    ariaLabel="Text"
                    className="w-full"
                    parentClassName="mt-2"
                    value="Text Input Error"
                    hasError={true}
                    icon={
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                    }
                />
            </div>
        )
    }

    const handleTextInputTableRows = (name: string) => {
        if (name === 'Plain')
            return [
                { props: "name", type: "String", desc: "Name of the Text Input." },
                { props: "ariaLabel", type: "String", desc: "Aria-label of the Text Input." },
                { props: "className?", type: "String", desc: "Dynamic class of the Text Input." },
                { props: "value", type: "String", desc: "Value of the Text Input." },
                { props: "hasError?", type: "Boolean", desc: "This makes the Text Input border red." },
            ]

        if (name === 'Iconed')
            return [
                { props: "name", type: "String", desc: "Name of the Text Input." },
                { props: "ariaLabel", type: "String", desc: "Aria-label of the Text Input." },
                { props: "className?", type: "String", desc: "Dynamic class of the Text Input." },
                { props: "parentClassName?", type: "String", desc: "Dynamic class of the Parent Div of Text Input." },
                { props: "value", type: "String", desc: "Value of the Text Input." },
                { props: "hasError?", type: "Boolean", desc: "This makes the Text Input border red." },
                { props: "icon", type: "ReactNode", desc: "Icon to be show at the left side of the Text Input." },
            ]
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
        </>
    )
}

export default TextInputComponentBlock