import {SpinnerProps} from './interface.ts';

export const iconRenderer = (props: SpinnerProps) => {
    const {
        duration,
        isClockwiseDirection,
        type
    } = props;
    switch (type) {
        case 'spokes': {
            return <g>
                <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
                    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
                </path>
                <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
                    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite"
                             begin="0.125s"/>
                </path>
                <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
                    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite"
                             begin="0.25s"/>
                </path>
                <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
                    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite"
                             begin="0.375s"/>
                </path>
                <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
                    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite"
                             begin="0.5s"/>
                </path>
                <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
                    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite"
                             begin="0.675s"/>
                </path>
                <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
                    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite"
                             begin="0.75s"/>
                </path>
                <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
                    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite"
                             begin="0.875s"/>
                </path>
            </g>;
        }
        case 'spinningBubbles':
            return <g>
                <circle cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
                <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
                <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
                <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
                <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
                <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
                <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
                <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
                    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s"
                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
                </circle>
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