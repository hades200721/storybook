import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      className={['storybook-button', mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
