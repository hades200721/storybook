import './header.css';

interface SpinnerProps {
    color?: 'string';
    direction?: 'string';
    size?: number;
}

export const Spinner = ({color}: SpinnerProps) => (
    <div>
        {color}
    </div>
);
