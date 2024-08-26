import React from 'react';
import {ButtonGroupProps} from './interface';
import {StyledButton} from './style';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
                                                  className,
                                                  items,
                                                  onClickCallback
                                              }) => {
    return (
        <StyledButton className={className}>
            {items.map(item => <span key={item} onClick={onClickCallback}>{item}</span>)}
        </StyledButton>
    );
};
