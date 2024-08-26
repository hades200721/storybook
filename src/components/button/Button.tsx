import React from 'react';
import {ButtonProps} from './interface';
import {StyledButton} from './style';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
                                                  className,
                                                  label,
                                                  ...props
                                              }) => {
    return (
        <StyledButton
            className={className}
            {...props}
        >
            {label}
        </StyledButton>
    );
};
