//#region Import
import { useState, useEffect } from 'react';
import { IUseDebounce } from '@interface/hooks/useDebounce.interface';
//#endregion

const useDebounce = ({ value, delay }: IUseDebounce) => {

    //#region State
    const [debouncedValue, setDebouncedValue] = useState<string>(value);
    //#endregion

    //#region UseEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);
    //#endregion

    return debouncedValue;
}

export default useDebounce;