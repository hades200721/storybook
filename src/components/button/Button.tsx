import {ButtonProps} from './interface.ts';
import {StyledButton} from './style.ts';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
