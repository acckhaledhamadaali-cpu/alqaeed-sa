import { ReactNode, HTMLAttributes, ElementType } from 'react';

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'white' | 'subtle' | 'primary';
  spacing?: 'default' | 'dense' | 'none';
  as?: ElementType;
}

export default function SectionWrapper({
  children,
  variant = 'white',
  spacing = 'default',
  className = '',
  as: Component = 'section',
  ...props
}: SectionWrapperProps) {
  const variants = {
    white: 'bg-white border border-white',
    subtle: 'bg-white border border-white',
    primary: 'bg-primary text-white',
  };

  const spacings = {
    default: 'py-8 md:py-12',
    dense: 'py-6 md:py-8',
    none: 'py-0',
  };

  return (
    <Component
      className={`${variants[variant]} ${spacings[spacing]} w-full overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
