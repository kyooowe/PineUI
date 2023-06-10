//#region Import
import { ReactNode, useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { twMerge } from 'tailwind-merge';
import { useDarkModeConfigStore } from '../../zustand/config.store';
import Table from '../table/table.component';
//#endregion

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
    const cardClassName = twMerge("flex flex-col bg-white border border-gray-300/[.7] shadow rounded-xl dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7]", className)
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    const zustandStoreDarkModeConfig = useDarkModeConfigStore(
        (state) => state.storeIsDarkMode
    )
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

    useEffect(() => {
        if (zustandDarkModeConfig) document.body.classList.add('dark')
        else document.body.classList.remove('dark')
    }, [zustandDarkModeConfig])
    //#endregion

    //#region Handler
    const handleDarkMode = () => {
        zustandStoreDarkModeConfig(!zustandDarkModeConfig)
    }
    //#endregion

    return (

        <div className={cardClassName}>
            <div className="flex justify-between bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-900 dark:border-gray-700">
                <div className='self-start'>
                    <p className="mt-1 text-sm text-gray-500 dark:text-white">
                        {title}
                    </p>
                </div>
                <div className='self-end'>
                    <button
                        className='text-gray-600 mr-3 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-300 dark:hover:text-gray-500 focus:outline-none'
                        aria-label='darkModeToggler'
                        onClick={() => handleDarkMode()}
                    >
                        {
                            zustandDarkModeConfig ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap='round'
                                        stroke='currentColor'
                                        strokeLinejoin='round'
                                        d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap='round'
                                        stroke='currentColor'
                                        strokeLinejoin='round'
                                        d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                                    />
                                </svg>
                            )
                        }
                    </button>

                    <button
                        className='text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
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
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="w-4 h-4"
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
                        className='text-gray-600 ml-3 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
                        aria-label='showToggler'
                        onClick={() => setShowTab(showTab === 'preview' ? 'code' : 'preview')}
                    >

                        {
                            showTab === 'code' ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="w-4 h-4"
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
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="w-4 h-4"
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
            <div className="py-5 px-7">
                {
                    showTab === 'code' ? (
                        <div>
                            <p className='text-xl'>Available Props</p>
                            <div className='text-sm mt-2 mb-2 text-gray-600 dark:text-gray-500'>
                                {description}
                            </div>
                            <Table column={columns} rows={rows} tableClassName='w-full mb-5 mt-2 border-collapse rounded-lg' />

                            <p className='text-xl mb-2'>Snippet</p>
                            <SyntaxHighlighter
                                language="typescript"
                                style={zustandDarkModeConfig ? darcula : docco}
                                wrapLongLines={true}
                                customStyle={{
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
    )
}

export default PreviewCardsHightligher