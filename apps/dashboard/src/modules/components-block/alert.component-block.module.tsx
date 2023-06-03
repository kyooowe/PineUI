import React, { useEffect, useState } from 'react'
import Alert from '../../components/alert/alert.component'
import PreviewCardsHightligher from '../../components/cards/preview-card.component'
import IconedAlert from '../../components/alert/iconed-alert.component'
import NotificationAlert from '../../components/alert/notification-alert.component'
import PopAlert from '../../components/alert/pop-alert.component'

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
            <div className='flex-row p-2'>
                <Alert className='w-full' variant='primary' title="Title" text="This is a demo text." show={show} setShow={setShow} awake={true} />
                <Alert className='w-full' variant='secondary' title="Title" text="This is a demo text." show={show} setShow={setShow} awake={true} />
                <Alert className='w-full' variant='warning' title="Title" text="This is a demo text." show={show} setShow={setShow} awake={true} />
                <Alert className='w-full' variant='danger' title="Title" text="This is a demo text." show={show} setShow={setShow} awake={true} />
            </div>
        )
    }

    const handleIconedAlertBody = () => {
        return (
            <div className='flex-row p-2'>
                <IconedAlert
                    className='w-full'
                    variant='primary'
                    title="Title"
                    text="This is a demo text."
                    show={show}
                    setShow={setShow}
                    awake={true}
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
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            />
                        </svg>
                    }
                />
                <IconedAlert
                    className='w-full'
                    variant='secondary'
                    title="Title"
                    text="This is a demo text."
                    show={show}
                    setShow={setShow}
                    awake={true}
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
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            />
                        </svg>

                    }
                />
                <IconedAlert
                    className='w-full'
                    variant='warning'
                    title="Title"
                    text="This is a demo text."
                    show={show}
                    setShow={setShow}
                    awake={true}
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
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            />
                        </svg>

                    }
                />
                <IconedAlert
                    className='w-full'
                    variant='danger'
                    title="Title"
                    text="This is a demo text."
                    show={show}
                    setShow={setShow}
                    awake={true}
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
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            />
                        </svg>

                    }
                />
            </div>
        )
    }

    const handleNotificationAlertBody = () => {
        return (
            <div className='p-2'>
                <NotificationAlert
                    text="This a demo text."
                    show={show}
                    setShow={setShow}
                    awake={true}
                    image="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                />
            </div>
        )
    }

    const handlePopAlertBody = () => {
        return (
            <div className='flex-row sm:flex-row md:flex p-2 gap-2'>
                <PopAlert
                    className='w-full mt-2 md:mt-0'
                    variant="primary"
                    title="Demo"
                    text="This is a demo."
                    show={show}
                    setShow={setShow}
                    awake={true}
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
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            />
                        </svg>
                    }
                />
                <PopAlert
                    className='w-full mt-2 md:mt-0'
                    variant="secondary"
                    title="Demo"
                    text="This is a demo."
                    show={show}
                    setShow={setShow}
                    awake={true}
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
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            />
                        </svg>
                    }
                />
                <PopAlert
                    className='w-full mt-2 md:mt-0'
                    variant="warning"
                    title="Demo"
                    text="This is a demo."
                    show={show}
                    setShow={setShow}
                    awake={true}
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
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            />
                        </svg>
                    }
                />
                <PopAlert
                    className='w-full mt-2 md:mt-0'
                    variant="danger"
                    title="Demo"
                    text="This is a demo."
                    show={show}
                    setShow={setShow}
                    awake={true}
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
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            />
                        </svg>
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
                { props: "title", type: "String", desc: "The title to be shown in the Alert." },
                { props: "text", type: "String", desc: "The text to be displayed in the Alert." },
                { props: "className?", type: "String", desc: "A dynamic class for the Alert component." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Determines the color of the Alert based on the selected variant." },
                { props: "show", type: "Boolean", desc: "A flag to control the visibility of the Alert." },
                { props: "setShow", type: "Void", desc: "An event flag to toggle the visibility of the Alert." },
                { props: "delay?", type: "Number", desc: "Specifies the duration (in milliseconds) before the Alert automatically hides." },
                { props: "awake?", type: "Boolean", desc: "If enabled, the Alert will always be visible unless the close button is clicked." },
            ];

        if (name === 'iconed')
            return [
                { props: "title", type: "String", desc: "The title to be shown in the Alert." },
                { props: "text", type: "String", desc: "The text to be displayed in the Alert." },
                { props: "className?", type: "String", desc: "A dynamic class for the Alert component." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Determines the color of the Alert based on the selected variant." },
                { props: "show", type: "Boolean", desc: "A flag to control the visibility of the Alert." },
                { props: "setShow", type: "Void", desc: "An event flag to toggle the visibility of the Alert." },
                { props: "delay?", type: "Number", desc: "Specifies the duration (in milliseconds) before the Alert automatically hides." },
                { props: "awake?", type: "Boolean", desc: "If enabled, the Alert will always be visible unless the close button is clicked." },
                { props: "icon?", type: "ReactNode", desc: "The icon to be displayed on the left side of the Alert." }
            ];

        if (name === 'pop')
            return [
                { props: "title", type: "String", desc: "The title to be shown in the Alert." },
                { props: "text", type: "String", desc: "The text to be displayed in the Alert." },
                { props: "className?", type: "String", desc: "A dynamic class for the Alert component." },
                { props: "variant", type: "Primary | Secondary | Danger | Warning", desc: "Determines the color of the Alert based on the selected variant." },
                { props: "show", type: "Boolean", desc: "A flag to control the visibility of the Alert." },
                { props: "setShow", type: "Void", desc: "An event flag to toggle the visibility of the Alert." },
                { props: "delay?", type: "Number", desc: "Specifies the duration (in milliseconds) before the Alert automatically hides." },
                { props: "awake?", type: "Boolean", desc: "If enabled, the Alert will always be visible unless the close button is clicked." },
                { props: "icon?", type: "ReactNode", desc: "The icon to be displayed on the left side of the Alert." }
            ];

        if (name === 'notification')
            return [
                { props: "text", type: "String", desc: "The text to be displayed in the Alert." },
                { props: "className?", type: "String", desc: "A dynamic class for the Alert component." },
                { props: "show", type: "Boolean", desc: "A flag to control the visibility of the Alert." },
                { props: "setShow", type: "Void", desc: "An event flag to toggle the visibility of the Alert." },
                { props: "delay?", type: "Number", desc: "Specifies the duration (in milliseconds) before the Alert automatically hides." },
                { props: "awake?", type: "Boolean", desc: "If enabled, the Alert will always be visible unless the close button is clicked." },
                { props: "image", type: "String", desc: "Image to be display on the left side of the Alert" },
            ];
    }
    //#endregion

    return (
        <>
            <PreviewCardsHightligher
                title="Alerts"
                description="A customized alert component used to display important messages or notifications to users, providing crucial information or warnings."
                body={handleAlertBody()}
                code={`<Alert variant='primary' title="Title" text="This is a demo text." show={show} setShow={setShow} delay={2000} />`}
                columns={columns}
                rows={handleButtonTableRows("plain")}
            />
            <PreviewCardsHightligher
                className='mt-5'
                title="Iconed Alerts"
                description="A customized iconed alert component used to display important messages or notifications to users, providing crucial information or warnings."
                body={handleIconedAlertBody()}
                code={`<Alert variant='primary' title="Title" text="This is a demo text." show={show} setShow={setShow} delay={2000} icon={Icon Here} />`}
                columns={columns}
                rows={handleButtonTableRows("iconed")}
            />
            <PreviewCardsHightligher
                className='mt-5'
                title="Notification Alert"
                description="A customized notification alert component used to display notitication message with image."
                body={handleNotificationAlertBody()}
                code={`<NotificationAlert text="This a demo text." show={show} setShow={setShow} delay={1500} image="Image link here" />`}
                columns={columns}
                rows={handleButtonTableRows("notification")}
            />
            <PreviewCardsHightligher
                className='mt-5'
                title="Pop Alert"
                description="A customized iconed alert component used to display important messages or notifications to users, providing crucial information or warnings."
                body={handlePopAlertBody()}
                code={`<NotificationAlert text="This a demo text." show={show} setShow={setShow} delay={1500} image="Image link here" />`}
                columns={columns}
                rows={handleButtonTableRows("pop")}
            />

            <hr className="mt-10" />
        </>
    )
}

export default AlertComponentBlock