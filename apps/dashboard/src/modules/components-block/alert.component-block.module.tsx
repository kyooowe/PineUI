import React, { useEffect, useState } from 'react'
import Alert from '../../components/alert/alert.component'
import PreviewCardsHightligher from '../../components/cards/preview-card.component'

const AlertComponentBlock = () => {

    //#region State Helper
    const columns: string[] = ['Props', 'Type', 'Description']
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
                <PreviewCardsHightligher
                    title="Solid Alerts"
                    description="A customized alert component used to display important messages or notifications to users, providing crucial information or warnings."
                    body={handleAlertBody()}
                    code={`<Alert variant='warning' show={show} setShow={setShow} awake={true} body={body here} />`}
                    columns={columns}
                    rows={handleButtonTableRows("plain")}
                />

                <PreviewCardsHightligher
                    title="Soft Alerts"
                    className='mt-5'
                    description="A customized alert component used to display important messages or notifications to users, providing crucial information or warnings."
                    body={handleSoftAlertBody()}
                    code={`<Alert solid={false} variant='warning' show={show} setShow={setShow} awake={true} body={body here} />`}
                    columns={columns}
                    rows={handleButtonTableRows("plain")}
                />
            </div>
            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">COMPONENT ON THIS PAGE</p>

                    {/* Alert */}
                    <p className="mt-2 text-blue-600 font-bold">Variants</p>
                    <p className="ml-4">Default Alert</p>
                    <p className="ml-4">Soft Alert</p>

                </div>
            </div>
        </div>
    )
}

export default AlertComponentBlock