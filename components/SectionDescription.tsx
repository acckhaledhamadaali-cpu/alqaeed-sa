import { ReactNode, HTMLAttributes } from 'react';
import { TYPOGRAPHY } from '../src/lib/tokens';

export interface SectionDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: 'normal' | 'large' | 'small';
}

export default function SectionDescription({
  children,
  size = 'normal',
  className = '',
  ...props
}: SectionDescriptionProps) {
  const sizes = {
    large: TYPOGRAPHY.body.large,
    normal: TYPOGRAPHY.body.normal,
    small: TYPOGRAPHY.body.small,
  };

  return (
    <p
      className={`${sizes[size]} text-text-secondary font-arabic max-w-2xl leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
