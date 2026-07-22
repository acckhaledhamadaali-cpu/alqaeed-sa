import { ReactNode, HTMLAttributes } from 'react';
import { TYPOGRAPHY } from '../src/lib/tokens';

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2 | 3;
}

export default function SectionTitle({
  children,
  level = 2,
  className = '',
  ...props
}: SectionTitleProps) {
  const headings = {
    1: TYPOGRAPHY.display.l,
    2: TYPOGRAPHY.heading.h1,
    3: TYPOGRAPHY.heading.h2,
  };

  const Component = `h${level}` as 'h1' | 'h2' | 'h3';

  return (
    <Component
      className={`${headings[level]} text-text-primary ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
