import React from 'react';
import Select from 'react-select'
import {DropDownProps} from './interface';

/**
 * Primary UI component for user interaction
 */
export const Dropdown: React.FC<DropDownProps> = ({
                                                  className,
                                                  isMulti = false,
                                                    options,
                                                  ...props
                                              }) => {
    return (
        <Select
            className={className}
            isMulti={isMulti}
            options={options}
            {...props}
        />
    );
};
