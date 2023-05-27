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
                    text="Primary"
                    ariaLabel="btnPrimary"
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
                    text="Primary"
                    ariaLabel="btnPrimary"
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
                    text="Primary"
                    ariaLabel="btnPrimary"
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
                { props: "text", type: "String", desc: "The text to be displayed on the Button." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Button." },
                { props: "type", type: "Button | Submit", desc: "Specifies the type of the Button, either 'Button' or 'Submit'." },
                { props: "className?", type: "String", desc: "A dynamic class for the Button component." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Determines the color of the Button based on the selected variant." }
            ];

        if (name === 'iconed')
            return [
                { props: "text", type: "String", desc: "The text to be displayed on the Button." },
                { props: "ariaLabel", type: "String", desc: "The ARIA label for the Button." },
                { props: "type", type: "Button | Submit", desc: "Specifies the type of the Button, either 'Button' or 'Submit'." },
                { props: "className?", type: "String", desc: "A dynamic class for the Button component." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Determines the color of the Button based on the selected variant." },
                { props: "icon", type: "ReactNode", desc: "The icon to be displayed on the left side of the Button." }
            ];
    }

    return (
        <>
            <PreviewCardsHightligher
                title="Buttons"
                description="A versatile and customizable button component, designed to enhance user interactivity and facilitate seamless navigation and action triggering within your application."
                body={handleButtonBody()}
                code={`<Button text="Primary" ariaLabel="btnPrimary" type="button" variant="primary" />`}
                columns={columns}
                rows={handleButtonTableRows("plain")}
            />

            <PreviewCardsHightligher
                title="Iconed Buttons"
                className="mt-10"
                description="A versatile and customizable button component, designed to enhance user interactivity and facilitate seamless navigation and action triggering within your application."
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