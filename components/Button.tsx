import { ReactNode, ButtonHTMLAttributes } from 'react';
import { TRANSITIONS, RADIUS } from '../src/lib/tokens';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  // Base styles matching Design Tokens transition and base padding rules
  const baseStyles = `inline-flex items-center justify-center font-arabic font-medium select-none ${TRANSITIONS.normal} focus:outline-none focus:ring-2 focus:ring-offset-2`;
  
  // Variant mapping using color tokens
  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-white focus:ring-primary',
    secondary: 'bg-secondary hover:bg-secondary-light text-white focus:ring-secondary',
    outline: 'border border-border-subtle bg-transparent text-text-primary hover:bg-surface-muted focus:ring-primary',
    ghost: 'bg-transparent text-text-secondary hover:bg-surface-muted focus:ring-primary',
  };

  // Size mapping using spacing and radius principles
  const sizes = {
    sm: `px-3 py-1.5 text-sm ${RADIUS.small}`,
    md: `px-4 py-2 text-base ${RADIUS.medium}`,
    lg: `px-6 py-3 text-lg ${RADIUS.large}`,
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
