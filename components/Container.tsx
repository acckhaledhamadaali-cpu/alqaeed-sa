import { ReactNode, HTMLAttributes } from 'react';
import { CONTAINER } from '../src/lib/tokens';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  clean?: boolean; // If true, removes extra outer margin styles
}

export default function Container({
  children,
  clean = false,
  className = '',
  ...props
}: ContainerProps) {
  const baseStyles = `${CONTAINER.width} ${CONTAINER.padding} ${clean ? '' : CONTAINER.mx}`;

  return (
    <div
      className={`${baseStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
