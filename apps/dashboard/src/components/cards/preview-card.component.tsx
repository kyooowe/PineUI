import { ReactNode, useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { twMerge } from 'tailwind-merge';
import { useDarkModeConfigStore } from '../../zustand/config.store';
import Table from '../table/table.component';

interface IPreviewCardsHighligherProps {
    title: string;
    description: ReactNode;
    code: string;
    body: ReactNode;
    className?: string;
    columns: string[];
    rows: any;
}

const PreviewCardsHightligher = ({ title, description, code, body, className, columns, rows }: IPreviewCardsHighligherProps) => {

    //#region State Helper
    const cardClassName = twMerge("", className)
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    //#endregion

    //#region State
    const [showTab, setShowTab] = useState<string>("preview")
    const [codeCopied, setCodeCopied] = useState<boolean>(false)
    //#endregion

    //#region UseEffect
    useEffect(() => {
        if (codeCopied) {
            setTimeout(() => {
                setCodeCopied(false)
            }, 2000)
        }
    }, [codeCopied])
    //#endregion

    return (
        <div className={cardClassName} key={title}>
            <p className="text-3xl font-bold">{title}</p>
            <div className="text-sm mt-2">{description}</div>
            <div
                className="w-auto h-auto mt-4 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:bg-gray-700 dark:border-gray-500"
            >
                <div className='px-5 py-3 border-b dark:border-gray-500'>
                    <div className="flex justify-between">
                        <div className="self-start">
                            Example
                        </div>

                        <div className="self-end">
                            <button
                                className='text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
                                aria-label='copyToggler'
                                disabled={codeCopied}
                                onClick={() => {
                                    navigator.clipboard.writeText(code)
                                    setCodeCopied(true)
                                }}
                            >

                                {
                                    codeCopied ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                                            />
                                        </svg>
                                    )
                                }
                            </button>

                            <button
                                className='text-gray-600 ml-3 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
                                aria-label='showToggler'
                                onClick={() => setShowTab(showTab === 'preview' ? 'code' : 'preview')}
                            >

                                {
                                    showTab === 'code' ? (
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
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ) : (
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
                                                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                                            />
                                        </svg>
                                    )
                                }
                            </button>

                        </div>
                    </div>
                </div>
                <div className="px-5 py-2">
                    {
                        showTab === 'code' ? (
                            <div>
                                <p className='text-xl mt-3'>Available Props</p>
                                <Table column={columns} rows={rows} tableClassName='w-full mb-5 mt-2 border-collapse rounded-lg' />

                                <p className='text-xl mt-3 mb-2'>Snippets</p>
                                <SyntaxHighlighter
                                    language="typescript"
                                    style={zustandDarkModeConfig ? darcula : docco}
                                    wrapLongLines={true}
                                    customStyle={{
                                        marginBottom: '10px',
                                        borderRadius: '10px'
                                    }}
                                >
                                    {code}
                                </SyntaxHighlighter>
                            </div>
                        ) : (
                            <div className='overflow-x-auto'>
                                {body}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PreviewCardsHightligher