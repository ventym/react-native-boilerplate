import { useCallback, useEffect, useRef } from 'react';

interface IUseTimerResult {
    startTimer: () => void;
    stopTimer: () => void;
}

const useTimer = (onTimer: () => void, delay: number, immediatelyStart: boolean = true): IUseTimerResult => {
    const timerId = useRef<NodeJS.Timeout>();

    const startTimer = useCallback(() => {
        timerId.current = setTimeout(onTimer, delay);
    }, [onTimer, delay]);

    const stopTimer = useCallback(() => {
        if (timerId.current !== undefined) clearTimeout(timerId.current);
    }, [timerId.current]);

    useEffect(() => {
        if (immediatelyStart) startTimer();
        return stopTimer;
    }, []);

    return {
        startTimer,
        stopTimer,
    };
};

export default useTimer;
