//#region Import
import { memo } from 'react'
import IconedButton from '@components/buttons/icon-button.component'
import Button from '@components/buttons/button.component'
import GoogleButton from '@components/buttons/google-button.component'
import FacebookButton from '@components/buttons/facebook-button.component'
import GithubButton from '@components/buttons/github-button.component'
import TwitterButton from '@components/buttons/twitter-button.component'
import PreviewCardsHightligher from '@components/cards/preview-card.component'
import { useDarkModeConfigStore } from '@/zustand/config.store'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula, atelierCaveLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import BorderedButton from '@/components/buttons/bordered-button.component'
//#endregion

const ButtonComponentBlock = memo(() => {

    //#region State Helper
    const columns: string[] = ['Props', 'Type', 'Description']
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    //#endregion

    //#region Button Body
    const handleButtonBody = () => {
        return (
            <div className="flex p-2 gap-2">
                <Button text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" />
                <Button text="Secondary" ariaLabel="btnPrimary" type="button" variant="secondary" />
                <Button text="Danger" ariaLabel="btnPrimary" type="button" variant="danger" />
                <Button text="Warning" ariaLabel="btnPrimary" type="button" variant="warning" />
            </div>
        )
    }

    const handleDisabledLoadingButtonBody = () => {
        return (
            <div className="flex p-2 gap-2">
                <Button text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" isDisabled={true} isLoading={true} />
                <Button text="Secondary" ariaLabel="btnPrimary" type="button" variant="secondary" isDisabled={true} isLoading={true} />
                <Button text="Danger" ariaLabel="btnPrimary" type="button" variant="danger" isDisabled={true} isLoading={true} />
                <Button text="Warning" ariaLabel="btnPrimary" type="button" variant="warning" isDisabled={true} isLoading={true} />
            </div>
        )
    }

    const handleBorderedButtonBody = () => {
        return (
            <div className='flex p-2 gap-2'>
                <BorderedButton text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" />
                <BorderedButton text="Secondary" ariaLabel="btnSecondary" type="button" variant="secondary" />
                <BorderedButton text="Danger" ariaLabel="btnDanger" type="button" variant="warning" />
                <BorderedButton text="Warning" ariaLabel="btnWarning" type="button" variant="danger" />
                <BorderedButton text="Plain" ariaLabel="btnPlain" type="button" variant="plain" />
            </div>
        )
    }

    const handleDisabledLoadingBorderedButtonBody = () => {
        return (
            <div className="flex p-2 gap-2">
                <BorderedButton text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" isDisabled={true} isLoading={true} />
                <BorderedButton text="Secondary" ariaLabel="btnSecondary" type="button" variant="secondary" isDisabled={true} isLoading={true} />
                <BorderedButton text="Danger" ariaLabel="btnDanger" type="button" variant="danger" isDisabled={true} isLoading={true} />
                <BorderedButton text="Warning" ariaLabel="btnWarning" type="button" variant="warning" isDisabled={true} isLoading={true} />
                <BorderedButton text="Plain" ariaLabel="btnPlain" type="button" variant="plain" isDisabled={true} isLoading={true} />
            </div>
        )
    }

    const handleIconedButtonBody = () => {
        return (
            <div className="flex p-2 gap-2">
                <IconedButton
                    text="Primary"
                    ariaLabel="btnPrimary"
                    type="button"
                    variant="primary"
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
                <IconedButton
                    text="Secondary"
                    ariaLabel="btnSecondary"
                    type="button"
                    variant="secondary"
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
                <IconedButton
                    text="Danger"
                    ariaLabel="btnDanger"
                    type="button"
                    variant="danger"
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
                <IconedButton
                    text="Warning"
                    ariaLabel="btnWarning"
                    type="button"
                    variant="warning"
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
                <IconedButton
                    text="Plain"
                    ariaLabel="btnPlain"
                    type="button"
                    variant="plain"
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

    const handleCustomButtonBody = () => {
        return (
            <div className="flex-row p-2 gap-2 md:flex">
                <GoogleButton className='mt-2 md:mt-0' />
                <FacebookButton className='mt-2 md:mt-0' />
                <GithubButton className='mt-2 md:mt-0' />
                <TwitterButton className='mt-2 md:mt-0' />
            </div>
        )
    }
    //#endregion

    //#region Rows
    const handleButtonTableRows = (name: string) => {

        if (name === 'plain')
            return [
                { props: "text", type: "String", desc: "The text to be displayed on the Button." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Button." },
                { props: "type", type: "Button | Submit", desc: "Specifies the type of the Button, either 'Button' or 'Submit'." },
                { props: "className?", type: "String", desc: "A dynamic class for the Button component." },
                { props: "isDisabled?", type: "Boolean", desc: "Make the button disabled." },
                { props: "isLoading?", type: "Boolean", desc: "Show loader on the left side of the Button." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Determines the color of the Button based on the selected variant." }
            ];

        if (name === 'bordered')
            return [
                { props: "text", type: "String", desc: "The text to be displayed on the Button." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Button." },
                { props: "type", type: "Button | Submit", desc: "Specifies the type of the Button, either 'Button' or 'Submit'." },
                { props: "className?", type: "String", desc: "A dynamic class for the Button component." },
                { props: "isDisabled?", type: "Boolean", desc: "Make the button disabled." },
                { props: "isLoading?", type: "Boolean", desc: "Show loader on the left side of the Button." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Determines the color of the Button based on the selected variant." }
            ];

        if (name === 'iconed')
            return [
                { props: "text", type: "String", desc: "The text to be displayed on the Button." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Button." },
                { props: "type", type: "Button | Submit", desc: "Specifies the type of the Button, either 'Button' or 'Submit'." },
                { props: "className?", type: "String", desc: "A dynamic class for the Button component." },
                { props: "isDisabled?", type: "Boolean", desc: "Make the button disabled." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Determines the color of the Button based on the selected variant." },
                { props: "icon", type: "ReactNode", desc: "The icon to be displayed on the left side of the Button." }
            ];

        if (name === 'social')
            return [
                { props: "className?", type: "String", desc: "A dynamic class for the Button component." },
            ];
    }
    //#endregion

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>
            <div className='mb-4 col-span-4 md:col-span-3'>

                <div className='flex-row'>
                    <div>
                        <span className='text-4xl font-bold'>Button</span>
                    </div>
                    <div className='mb-5 mt-2'>
                        <span>A versatile and customizable button component, designed to enhance user interactivity and facilitate seamless navigation and action triggering within your application.</span>
                    </div>
                    <SyntaxHighlighter
                        language="typescript"
                        style={zustandDarkModeConfig ? darcula : atelierCaveLight}
                        wrapLongLines={true}
                        customStyle={{
                            borderRadius: '10px'
                        }}
                    >
                        {`import Button from '@components/button/button.component' \nimport BorderedButton from '@/components/buttons/bordered-button.component'\nimport IconedButton from '@components/buttons/icon-button.component'\nimport GoogleButton from '@components/buttons/google-button.component'\nimport FacebookButton from '@components/buttons/facebook-button.component'\nimport GithubButton from '@components/buttons/github-button.component'\nimport TwitterButton from '@components/buttons/twitter-button.component'`}
                    </SyntaxHighlighter>
                </div>

                <PreviewCardsHightligher
                    title="Buttons"
                    className='mt-5'
                    body={handleButtonBody()}
                    code={`<Button text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" />`}
                    columns={columns}
                    rows={handleButtonTableRows("plain")}
                />

                <PreviewCardsHightligher
                    title="Disabled and Loading Buttons"
                    className='mt-5'
                    body={handleDisabledLoadingButtonBody()}
                    code={`<Button text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" isDisabled={true} isLoading={true} />`}
                    columns={columns}
                    rows={handleButtonTableRows("plain")}
                />

                <PreviewCardsHightligher
                    title="Bordered Buttons"
                    className='mt-5'
                    body={handleBorderedButtonBody()}
                    code={`<BorderedButton text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" />`}
                    columns={columns}
                    rows={handleButtonTableRows("bordered")}
                />

                <PreviewCardsHightligher
                    title="Disabled and Loading Bordered Buttons"
                    className='mt-5'
                    body={handleDisabledLoadingBorderedButtonBody()}
                    code={`<BorderedButton text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" isDisabled={true} isLoading={true} />`}
                    columns={columns}
                    rows={handleButtonTableRows("bordered")}
                />

                <PreviewCardsHightligher
                    title="Iconed Buttons"
                    className="mt-5"
                    body={handleIconedButtonBody()}
                    code={`<IconedButton text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" icon={Icon Here} />`}
                    columns={columns}
                    rows={handleButtonTableRows("iconed")}
                />

                <PreviewCardsHightligher
                    title="Custom Buttons"
                    className="mt-5"
                    body={handleCustomButtonBody()}
                    code={`<GoogleButton />\n<FacebookButton />\n<GithubButton />\n<TwitterButton />`}
                    columns={columns}
                    rows={handleButtonTableRows('social')}
                />
            </div>
            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">ON THIS PAGE</p>

                    <p className="mt-2 text-blue-600 font-bold">Variants</p>
                    <p className="ml-4">Default Button</p>
                    <p className="ml-4">Disabled and Loading Button</p>
                    <p className="ml-4">Bordered Button</p>
                    <p className="ml-4">Disabled and Loading Bordered Button</p>
                    <p className="ml-4">Iconed Button</p>
                    <p className="ml-4">Social Media Button</p>
                </div>
            </div>
        </div>
    )
})

export default ButtonComponentBlock