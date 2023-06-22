//#region Import
import Card from '@/components/cards/cards.component'
import MainCard from '@/components/cards/main-card.component'
import PreviewCardsHightligher from '@/components/cards/preview-card.component'
import { useDarkModeConfigStore } from '@/zustand/config.store'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveLight, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
//#endregion

const CardComponentBlock = () => {

    //#region State Helper
    const columns: string[] = ['Props', 'Type', 'Description']
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    //#endregion

    //#region Card Body
    const handleCardBody = () => {
        return (
            <div className='flex-row p-3'>
                <Card className='w-full' body={<p>Hello, this is Pine UI.</p>} />
                <Card
                    className='w-full mt-3'
                    body={
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Card title - Pine UI
                            </h3>
                            <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                                Card subtitle - MERN Dashboard
                            </p>
                            <p className="mt-2 text-gray-800 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700" href="https://home-two-ebon.vercel.app/">
                                Check Pine UI
                                <svg className="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                    }
                />
            </div>
        )
    }

    const handleMainCardBody = () => {
        return (
            <div className='flex-row p-3'>
                <MainCard
                    className='w-full'
                    header={
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                            With Header
                        </p>
                    }
                    body={
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Card title
                            </h3>
                            <p className="mt-2 text-gray-800 dark:text-gray-400">
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    }
                />

                <MainCard
                    className='w-full mt-3'
                    header={
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                            With Header and Footer
                        </p>
                    }
                    body={
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Card title
                            </h3>
                            <p className="mt-2 text-gray-800 dark:text-gray-400">
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    }
                    footer={
                        <div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                                Last updated 5 mins ago
                            </p>
                        </div>
                    }
                />
            </div>
        )
    }
    //#endregion

    //#region Rows
    const handleCardTableRows = (name: string) => {

        if (name === 'plain')
            return [
                { props: "body", type: "ReactNode", desc: "Body of the Card." },
                { props: "className?", type: "String", desc: "Dynamic class of the Card." },
            ];

        if (name === 'main')
            return [
                { props: "header", type: "ReactNode", desc: "Header of the Card." },
                { props: "footer?", type: "ReactNode", desc: "Footer of the Card." },
                { props: "body", type: "ReactNode", desc: "Body of the Card." },
                { props: "className?", type: "String", desc: "Dynamic class of the Card." },
            ];
    }
    //#endregion

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>
            <div className='mb-4 col-span-4 md:col-span-3'>

                <div className='flex-row'>
                    <div>
                        <span className='text-4xl font-bold'>Card</span>
                    </div>
                    <div className='mb-5 mt-2'>
                        <span>A customized card component used to display any context.</span>
                    </div>
                    <SyntaxHighlighter
                        language="typescript"
                        style={zustandDarkModeConfig ? darcula : atelierCaveLight}
                        wrapLongLines={true}
                        customStyle={{
                            borderRadius: '10px'
                        }}
                    >
                        import Card from '@components/card/card.component'
                    </SyntaxHighlighter>
                </div>

                <PreviewCardsHightligher
                    title="Basic Card"
                    className='mt-5'
                    body={handleCardBody()}
                    code={`<Card body={Body here} />`}
                    columns={columns}
                    rows={handleCardTableRows("plain")}
                />

                <PreviewCardsHightligher
                    title="Main Card"
                    className='mt-5'
                    body={handleMainCardBody()}
                    code={`<MainCard header={Header here} body={Body here} footer={Footer here} />`}
                    columns={columns}
                    rows={handleCardTableRows("main")}
                />
            </div>
            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">ON THIS PAGE</p>

                    <p className="mt-2 text-blue-600 font-bold">Variants</p>
                    <p className="ml-4">Default Card</p>
                    <p className="ml-4">Main Card</p>
                </div>
            </div>
        </div>
    )
}

export default CardComponentBlock