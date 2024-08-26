import {SpinnerProps} from './interface.ts';
import {ANIMATION_TYPE} from './constants.ts';

export const iconRenderer = (props: SpinnerProps) => {
    const {
        duration,
        isClockwiseDirection,
        type
    } = props;
    const {interval, steps, value} = ANIMATION_TYPE[type];
    const stepsArr = isClockwiseDirection? steps : steps.reverse();
    switch (type) {
        case 'bars': {
            return <g>
                {stepsArr.map((step: number) =>
                    <path transform={`translate(${2 + (value * step)})`} d="M0 12 V20 H4 V12z">
                        <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite"
                                 begin={0.2* step} keyTimes="0;0.2;0.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
                    </path>)}
            </g>;
        }
        case 'spokes': {
            return <g>
                {stepsArr.map((step: number) =>
                    <path opacity=".1" d="M14 0 H18 V8 H14 z" transform={`rotate(${value * step} 16 16)`}>
                        <animate attributeName="opacity" from="1" to=".1" dur={`${duration}s`} repeatCount="indefinite"
                                 begin={`${interval * step}`}/>
                    </path>)}
            </g>;
        }
        case 'spinningBubbles':
            return <g>
                {stepsArr.map((step: number) =>
                    <circle transform={`rotate(${value * step} 16 16)`} cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur={`${duration}s`} repeatCount="indefinite"
                                 begin={`${interval * step}`}
                                 keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                    </circle>)}
                <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
            </g>;
        case 'spinner':
        default: {
            const fromCred = isClockwiseDirection ? '0 16 16' : '360 16 16';
            const toCred = isClockwiseDirection ? '360 16 16' : '0 16 16';
            return <g>
                <path opacity=".25"
                      d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
                <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
                    <animateTransform attributeName="transform" type="rotate" from={fromCred} to={toCred}
                                      dur={`${duration}s`} repeatCount="indefinite"/>
                </path>
            </g>;
        }
    }
}
