import { ReactNode, HTMLAttributes } from 'react';
import { RADIUS } from '../src/lib/tokens';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
}

export default function Badge({
  children,
  variant = 'neutral',
  className = '',
  ...props
}: BadgeProps) {
  const baseStyles = `inline-flex items-center px-2.5 py-0.5 text-[8px] font-semibold font-arabic ${RADIUS.full} select-none`;

  const variants = {
    primary: 'bg-primary-light/10 text-primary-light border border-primary-light/20',
    secondary: 'bg-secondary-light/10 text-secondary-dark border border-secondary-light/20',
    success: 'bg-success/10 text-success border border-success/20',
    warning: 'bg-warning/10 text-warning border border-warning/20',
    danger: 'bg-danger/10 text-danger border border-danger/20',
    neutral: 'bg-surface-muted text-text-secondary border border-white',
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
