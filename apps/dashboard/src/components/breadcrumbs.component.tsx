import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {

    //#region State Helper
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    //#endregion

    return (
        <>
            {
                pathnames.length > 0 && (
                    <li className='flex items-center text-sm text-gray-800 dark:text-gray-400'>
                        {
                            pathnames.map((name, index) => {

                                // Get the last path
                                const isLast = index === pathnames.length - 1;

                                return (
                                    <React.Fragment key={name}>
                                        {
                                            name.charAt(0).toUpperCase() + name.slice(1) + ' '
                                        }
                                        {
                                            isLast ? '' : (
                                                <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            )
                                        }
                                    </React.Fragment>
                                );
                            }
                            )}
                    </li>
                )
            }
        </>
    );
};

export default Breadcrumbs;