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
                    <p className='dark:text-white'>
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
                                            isLast ? '' : '/ '
                                        }
                                    </React.Fragment>
                                );
                            }
                            )}
                    </p>
                )
            }
        </>
    );
};

export default Breadcrumbs;