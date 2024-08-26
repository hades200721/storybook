import {OptionsOrGroups, GroupBase} from 'react-select';

export interface DropDownProps {
    className?: string;
    isMulti?: boolean;
    options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
    onClick?: () => void;
}
