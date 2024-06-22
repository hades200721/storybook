import {styled} from 'styled-components';
import {HTMLAttributes} from "react";

export interface ButtonStyleProps {
    primary?: boolean;
    size?: string;
}

export const StyledButton = styled.button`
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    ${(props: HTMLAttributes<any>) => {
        let buttonSizeProps;
        let buttonColorsProps;
        switch (props.size) {
            case 'small': {
                buttonSizeProps = `font-size: 12px; padding:10px 16px;`;
                break;
            }
            case 'large': {
                buttonSizeProps = `font-size: 16px; padding: 12px 24px;`;
                break;
            }
            case 'medium':
            default: {
                buttonSizeProps = `font-size: 14px; 11px 20px;`;
            }
        }
        if (props.primary) {
            buttonColorsProps = `color: white; background-color: #1ea7fd;`;
        } else {
            buttonColorsProps = ` color: #333; background-color: transparent; box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;`;
        }
        return buttonSizeProps + buttonColorsProps;
    }
    }
`;
