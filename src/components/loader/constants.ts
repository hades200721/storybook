import {animationProps} from './interface.ts';

export const DEFAULT_LOADER_PROPS = {
    isClockwiseDirection: true,
    color: '#333',
    duration: 0.8,
    size: 25,
    type: 'spinner',
}

export const ANIMATION_TYPE: {[index: string]: animationProps} = {
    bars: {
        interval: 0.125,
        value: 6,
        steps: Array.from(Array(5).keys()),
    },
    spinner: {
        interval: 0.125,
        value: 45,
        steps: [],
    },
    spokes: {
        interval: 0.125,
        value: 45,
        steps: Array.from(Array(8).keys()),
    },
    spinningBubbles: {
        interval: 0.125,
        value: 45,
        steps: Array.from(Array(8).keys()),
    }
}
