import {StyledSpinner} from './style.ts';

interface SpinnerProps {
    color?: string;
    clockwiseDirection?: boolean;
    size?: number;
}

export const Spinner = ({color}: SpinnerProps) => (
    <StyledSpinner>
        {color}
    </StyledSpinner>
);
