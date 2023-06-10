//#region Import
import React, { useEffect, useState } from 'react'
import Alert from '@components/alert/alert.component'
import PreviewCardsHightligher from '@components/cards/preview-card.component'
import Button from '@components/buttons/button.component'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveLight, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useDarkModeConfigStore } from '@zustand/config.store'
//#endregion

const AlertComponentBlock = () => {

    //#region State Helper
    const columns: string[] = ['Props', 'Type', 'Description']
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    //#endregion

    //#region State
    const [show, setShow] = useState<boolean>(true)
    //#endregion

    //#region UseEffect
    useEffect(() => {
        if (!show) {
            setTimeout(() => {
                setShow(true)
            }, 1000)
        }
    }, [show])
    //#endregion

    //#region Body
    const handleAlertBody = () => {
        return (
            <div className='flex-row p-3'>
                <Alert
                    className='w-full'
                    variant='primary'
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <span>This is a primary demo.</span>
                    }
                />
                <Alert
                    className='w-full mt-3'
                    variant='secondary'
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <span>This is a secondary demo.</span>
                    }
                />
                <Alert
                    className='w-full mt-3'
                    variant='warning'
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <span>This is a warning demo.</span>
                    }
                />
                <Alert
                    className='w-full mt-3'
                    variant='danger'
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <span>This is a danger demo.</span>
                    }
                />
            </div>
        )
    }

    const handleSoftAlertBody = () => {
        return (
            <div className='flex-row p-2'>
                <Alert
                    className='w-full'
                    variant='primary'
                    solid={false}
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <span>This is a primary demo.</span>
                    }
                />
                <Alert
                    className='w-full mt-3'
                    variant='secondary'
                    solid={false}
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <span>This is a secondary demo.</span>
                    }
                />
                <Alert
                    className='w-full mt-3'
                    variant='warning'
                    solid={false}
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <span>This is a warning demo.</span>
                    }
                />
                <Alert
                    className='w-full mt-3'
                    variant='danger'
                    solid={false}
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <span>This is a danger demo.</span>
                    }
                />
            </div>
        )
    }

    const handleCustomAlertBoady = () => {
        return (
            <div className='flex-row p-3'>
                <Alert
                    className='w-full'
                    variant='warning'
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-4 w-4 text-yellow-100 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-sm text-yellow-100 font-semibold">
                                    Cannot connect to the database
                                </h3>
                                <div className="mt-1 text-sm text-yellow-100">
                                    We are unable to save any progress at this time.
                                </div>
                            </div>
                        </div>
                    }
                />

                <Alert
                    className='w-full mt-3'
                    variant='danger'
                    show={show}
                    setShow={setShow}
                    awake={true}
                    body={
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-4 w-4 text-red-100 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-sm text-red-100 font-semibold">
                                    A problem has been occurred while submitting your data.
                                </h3>
                                <div className="mt-2 text-sm text-red-100">
                                    <ul className="list-disc space-y-1 pl-5">
                                        <li>
                                            This username is already in use
                                        </li>
                                        <li>
                                            Email field can't be empty
                                        </li>
                                        <li>
                                            Please enter a valid phone number
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                />

                <Alert
                    className='w-full mt-3'
                    variant='primary'
                    show={show}
                    setShow={setShow}
                    awake={true}
                    solid={false}
                    body={
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-4 w-4 text-blue-800 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-blue-800 font-semibold">
                                    YouTube would like you to send notifications
                                </h3>
                                <div className="mt-2 text-sm text-blue-800">
                                    Notifications may include alerts, sounds and icon badges. These can be configured in Settings.
                                </div>
                                <div className="mt-4">
                                    <div className="flex space-x-3">
                                        <Button solid={false} text="Don't allow" ariaLabel='btnDontAllow' type="button" variant='danger' />
                                        <Button solid={false} text="Allow" ariaLabel='btnAllow' type="button" variant='primary' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
        )
    }
    //#endregion

    //#region Rows
    const handleButtonTableRows = (name: string) => {

        if (name === 'plain')
            return [
                { props: "body", type: "ReactNode", desc: "Body of the Alert." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Alert color will depend on these variants." },
                { props: "solid?", type: "Boolean", desc: "Alert UI will depend on this flag." },
                { props: "className?", type: "String", desc: "Dynamic class of the Alert." },
                { props: "show", type: "Boolean", desc: "Flag to determine when to show the Alert." },
                { props: "setShow", type: "Void", desc: "Event function to control the visibility of the Alert." },
                { props: "delay?", type: "Number", desc: "Specifies the duration (in milliseconds) before the Alert automatically hides." },
                { props: "awake?", type: "Boolean", desc: "If enabled, the Alert will always be visible unless the close button is clicked." },
            ];
    }
    //#endregion

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>
            <div className='mb-4 col-span-4 md:col-span-3'>

                <div className='flex-row'>
                    <div>
                        <span className='text-4xl font-bold'>Alert</span>
                    </div>
                    <div className='mb-5 mt-2'>
                        <span>A customized alert component used to display important messages or notifications to users, providing crucial information or warnings.</span>
                    </div>
                    <SyntaxHighlighter
                        language="typescript"
                        style={zustandDarkModeConfig ? darcula : atelierCaveLight}
                        wrapLongLines={true}
                        customStyle={{
                            borderRadius: '10px'
                        }}
                    >
                        import Alert from '@components/alert/alert.component'
                    </SyntaxHighlighter>
                </div>

                <PreviewCardsHightligher
                    title="Solid Alerts"
                    className='mt-5'
                    body={handleAlertBody()}
                    code={`<Alert variant='warning' show={show} setShow={setShow} awake={true} body={body here} />`}
                    columns={columns}
                    rows={handleButtonTableRows("plain")}
                />

                <PreviewCardsHightligher
                    title="Soft Alerts"
                    className='mt-5'
                    body={handleSoftAlertBody()}
                    code={`<Alert solid={false} variant='warning' show={show} setShow={setShow} awake={true} body={body here} />`}
                    columns={columns}
                    rows={handleButtonTableRows("plain")}
                />

                <PreviewCardsHightligher
                    title="Custom Body Alerts"
                    className='mt-5'
                    body={handleCustomAlertBoady()}
                    code={`<Alert \n solid={false} \n variant='warning' \n show={show} \n setShow={setShow} \n awake={true} \n body={<h1>This is free dom element</h1>} \n/>`}
                    columns={columns}
                    rows={handleButtonTableRows("plain")}
                />
            </div>
            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">ON THIS PAGE</p>

                    <p className="mt-2 text-blue-600 font-bold">Variants</p>
                    <p className="ml-4">Default Alert</p>
                    <p className="ml-4">Soft Alert</p>
                </div>
            </div>
        </div>
    )
}

export default AlertComponentBlock