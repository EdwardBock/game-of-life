import {useEffect, useRef, useState} from "react";

export const useTimer = (callback: () => void, milliseconds: number = 1000) => {

    const [isRunning, setIsRunning] = useState(false);
    const timestamp = useRef(Date.now());

    useEffect(() => {
        if (!isRunning) return;
        const offset = Date.now() - timestamp.current;
        const diff = (offset < 1000 ? offset : 0);
        const id = setTimeout(() => {
            timestamp.current = Date.now();
            callback();
        }, milliseconds - diff);
        return () => clearTimeout(id);
    }, [isRunning, timestamp.current, milliseconds, callback]);

    return {
        isRunning,
        resume: () => {
            setIsRunning(true);
        },
        pause: () => {
            setIsRunning(false);
        }
    }
}