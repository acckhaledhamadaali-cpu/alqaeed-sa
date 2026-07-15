import { ReactNode, HTMLAttributes } from 'react';
import { RADIUS, SHADOWS, COLORS } from '../src/lib/tokens';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'elevated' | 'flat' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  variant = 'flat',
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  // Styles based on Design Tokens
  const baseStyles = `bg-surface-card font-arabic text-text-primary border-white`;

  const variants = {
    elevated: `${SHADOWS.medium} ${RADIUS.large}`,
    flat: `bg-surface-muted ${RADIUS.medium}`,
    outlined: `border ${RADIUS.medium}`,
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
