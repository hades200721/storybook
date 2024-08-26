import {styled} from 'styled-components';

export interface ButtonStyleProps {
    primary?: boolean;
    size?: string;
}

export const StyledButton = styled.button<ButtonStyleProps>`
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    ${props => {
        let buttonSizeProps;
        let buttonColorsProps;
        switch (props.size) {
            case 'medium': {
                buttonSizeProps = `font-size: 14px; 11px 20px;`;
                break;
            }
            case 'large': {
                buttonSizeProps = `font-size: 16px; padding: 12px 24px;`;
                break;
            }
            case 'small':
            default: {
                buttonSizeProps = `font-size: 12px; padding:10px 16px;`;
                break;
            }
        }
        if (props.primary) {
            buttonColorsProps = `color: white; background-color: var(--primary-brand-color);`;
        } else {
            buttonColorsProps = ` color: var(--primary-text-color); background-color: transparent; box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;`;
        }
        return buttonSizeProps + buttonColorsProps;
    }
    }
`;
