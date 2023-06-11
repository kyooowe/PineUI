import { useEffect } from "react"

const Hero = () => {

    useEffect(() => {
        document.body.classList.add('dark')
    }, [])

    return (
        <>
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">

                <div className="flex justify-center">
                    <a className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md" href="../figma.html">
                        <p className="mr-2 inline-block text-white text-md">
                            Check out Pine UI here.
                        </p>
                        <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <h1 className="block font-black bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-600 text-transparent text-7xl sm:text-9xl">
                        Pine UI
                    </h1>
                </div>

                <div className="max-w-lg mt-5 text-center mx-auto">
                    <p className="text-md text-gray-500 xs:text-sm">A <strong className="text-gray-300">comprehensive</strong> and <strong className="text-gray-300">user-friendly boilerplate</strong>, designed to expedite the development process of <strong className="text-gray-300">MERN Stack Dashboards</strong>, providing developers with an extensive range of <strong className="text-gray-300">components</strong> and <strong className="text-gray-300">features</strong>.</p>
                </div>

                <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                    <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                        <svg className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        Get it on Github
                    </a>
                    <a className="relative group inline-flex justify-center items-center gap-x-3.5 text-center bg-white border hover:border-gray-300 shadow-sm font-mono text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition p-2 pl-4 dark:bg-slate-900 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                        $ npx pineui --vite
                        <span className="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 dark:bg-gray-700 dark:text-gray-400">
                            <svg className="w-3.5 h-3.5 group-hover:rotate-6 transition" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="mt-5 flex justify-center items-center gap-1 sm:gap-x-2">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">Vite</span>
                    <svg className="h-5 w-5 text-gray-300 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">React</span>
                    <svg className="h-5 w-5 text-gray-300 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">Express</span>
                    <svg className="h-5 w-5 text-gray-300 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">Node JS</span>
                    <svg className="h-5 w-5 text-gray-300 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">Tailwind CSS</span>
                </div>
            </div>

        </>
    )
}

export default Hero