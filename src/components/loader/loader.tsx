import {useCallback} from 'react';
import {iconRenderer} from './icon';
import {StyledSpinner} from './style';
import {DEFAULT_LOADER_PROPS} from './constants';
import {SpinnerProps} from './interface';

export const Loader = ({...props}) => {
    const componentProps = {
        ...DEFAULT_LOADER_PROPS,
        ...props,
    }
    const style = {
        fill: componentProps.color,
        height: `${componentProps.size}px`,
        width: `${componentProps.size}px`,
    }

    const loaderRenderer = useCallback((props: SpinnerProps) => {
        return iconRenderer(props);
    }, []);

    return (
        <StyledSpinner style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                {loaderRenderer(componentProps)}
            </svg>
        </StyledSpinner>
    )
};
