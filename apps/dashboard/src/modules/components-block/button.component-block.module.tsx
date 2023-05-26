import React from 'react'
import IconedButton from '../../components/buttons/icon-button.component'
import Button from '../../components/buttons/button.component'
import GoogleButton from '../../components/buttons/google-button.component'
import FacebookButton from '../../components/buttons/facebook-button.component'
import GithubButton from '../../components/buttons/github-button.component'
import TwitterButton from '../../components/buttons/twitter-button.component'
import PreviewCardsHightligher from '../../components/cards/preview-card.component'

const ButtonComponentBlock = () => {

    const columns: string[] = ['Props', 'Type', 'Description']

    //#region Buttons
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

    const handleIconedButtonBody = () => {
        return (
            <div className="flex p-2 gap-2">
                <IconedButton
                    text="Primary"
                    ariaLabel="btnPrimary"
                    type="button"
                    variant="primary"
                    icon={
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                    }
                />
                <IconedButton
                    text="Primary"
                    ariaLabel="btnPrimary"
                    type="button"
                    variant="secondary"
                    icon={
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                    }
                />
                <IconedButton
                    text="Primary"
                    ariaLabel="btnPrimary"
                    type="button"
                    variant="danger"
                    icon={
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                    }
                />
                <IconedButton
                    text="Primary"
                    ariaLabel="btnPrimary"
                    type="button"
                    variant="warning"
                    icon={
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                    }
                />
            </div>
        )
    }

    const handleCustomButtonBody = () => {
        return (
            <div className="flex p-2 gap-2">
                <GoogleButton />
                <FacebookButton />
                <GithubButton />
                <TwitterButton />
            </div>
        )
    }

    const handleButtonTableRows = (name: string) => {

        if (name === 'plain')
            return [
                { props: "text", type: "String", desc: "Text to be shown by the Button." },
                { props: "ariaLabel", type: "String", desc: "Aria-labe of the Button." },
                { props: "type", type: "Button | Submit", desc: "Type of a Button, its either Button or Submit." },
                { props: "className?", type: "String", desc: "Dynamic class for the Button." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Button color depends on this field." },
            ]

        if (name === 'iconed')
            return [
                { props: "text", type: "String", desc: "Text to be shown by the Button." },
                { props: "ariaLabel", type: "String", desc: "Aria-labe of the Button." },
                { props: "type", type: "Button | Submit", desc: "Type of a Button, its either Button or Submit." },
                { props: "className?", type: "String", desc: "Dynamic class for the Button." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Button color depends on this field." },
                { props: "icon", type: "ReactNode", desc: "Icon to be show at the left side of the Button." },
            ]
    }
    //#endregion

    return (
        <>
            <PreviewCardsHightligher
                title="Buttons"
                description={
                    <>
                        <p> A versatile and customizable button component, designed to enhance user interactivity and facilitate seamless navigation and action triggering within your application.</p>
                        <p>Props: Text (Text of the Button), ariaLabel ()</p>
                    </>
                }
                body={handleButtonBody()}
                code={`<Button text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" />`}
                columns={columns}
                rows={handleButtonTableRows("plain")}
            />

            <PreviewCardsHightligher
                title="Iconed Buttons"
                className="mt-10"
                description={
                    <>
                        <p> A versatile and customizable iconed button component, designed to enhance user interactivity and facilitate seamless navigation and action triggering within your application.</p>
                        <p>Props: Text (Text of the Button), ariaLabel ()</p>
                    </>
                }
                body={handleIconedButtonBody()}
                code={`<IconedButton text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" icon={Icon Here} />`}
                columns={columns}
                rows={handleButtonTableRows("iconed")}
            />

            <PreviewCardsHightligher
                title="Custom Buttons"
                className="mt-10"
                description="A custom Google, Github, Facebook and Twitter button to use for signing in a specific account."
                body={handleCustomButtonBody()}
                code={`<GoogleButton />\n<FacebookButton />\n<GithubButton />\n<TwitterButton />`}
                columns={columns}
                rows={null}
            />

            <hr className="mt-10" />
        </>
    )
}

export default ButtonComponentBlock