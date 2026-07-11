import { ReactNode, HTMLAttributes } from 'react';

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'white' | 'subtle' | 'primary';
  spacing?: 'default' | 'dense' | 'none';
}

export default function SectionWrapper({
  children,
  variant = 'white',
  spacing = 'default',
  className = '',
  ...props
}: SectionWrapperProps) {
  const variants = {
    white: 'bg-white',
    subtle: 'bg-bg-light',
    primary: 'bg-primary text-white',
  };

  const spacings = {
    default: 'py-16 md:py-24',
    dense: 'py-10 md:py-16',
    none: 'py-0',
  };

  return (
    <section
      className={`${variants[variant]} ${spacings[spacing]} w-full overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
