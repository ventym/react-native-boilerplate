import { useCallback, useRef, useMemo } from 'react';
import Animated, { Easing } from 'react-native-reanimated';

import { BoolState } from 'app/utils/types';

const {
    useCode,
    Clock,
    clockRunning,
    startClock,
    stopClock,
    Value,
    block,
    cond,
    eq,
    timing,
    call,
    set,
    debug,
} = Animated;

interface IUseCollapseAnimationResult {
    height: Animated.Value<number>;
    setHeight: (newHeight: number) => void;
    startAnimation: () => void;
}

const useCollapseAnimation = (duration: number, onFinish: () => void): IUseCollapseAnimationResult => {
    const animationState = useRef<Animated.Value<number>>(new Value(BoolState.OFF));
    const height = useRef<Animated.Value<number>>(new Value(-1));
    const clock = useRef<Animated.Clock>(new Clock());

    const startAnimation = useCallback(() => {
        animationState.current.setValue(BoolState.ON);
    }, []);

    const setHeight = useCallback((newHeight: number) => {
        height.current.setValue(newHeight);
    }, [height]);

    const animationBlock = useMemo(() => {
        const state = {
            finished: new Value(0),
            position: height.current,
            time: new Value(0),
            frameTime: new Value(0),
        };

        const config = {
            toValue: new Value(0),
            duration,
            easing: Easing.in(Easing.quad),
        };

        return [
            cond(
                clockRunning(clock.current),
                [
                    timing(clock.current, state, config),
                    set(height.current, state.position),
                    cond(state.finished, [
                        stopClock(clock.current),
                        call([], onFinish),
                    ]),
                ],
                [
                    set(state.finished, 0),
                    set(state.position, height.current),
                    set(state.time, 0),
                    set(state.frameTime, 0),
                    startClock(clock.current),
                ]
            ),
        ];
    }, [height.current, onFinish, clock.current]);

    useCode(block([
        cond(
            eq(animationState.current, BoolState.ON),
            animationBlock,
            stopClock(clock.current),
        ),
    ]), [animationState.current, animationBlock, clock.current]);

    return {
        height: height.current,
        setHeight,
        startAnimation,
    };
};

export default useCollapseAnimation;
