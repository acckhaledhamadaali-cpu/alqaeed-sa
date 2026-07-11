import { HTMLAttributes } from 'react';
import { TYPOGRAPHY, RADIUS, TRANSITIONS } from '../src/lib/tokens';

export interface ResultCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export default function ResultCard({ title, description, id, className = '', ...props }: ResultCardProps) {
  return (
    <div 
      id={id} 
      className={`bg-white border border-border-subtle p-5 sm:p-6 ${RADIUS.large} ${TRANSITIONS.fast} hover:border-text-muted flex flex-col space-y-2 text-right h-full ${className}`} 
      {...props}
    >
      <h3 
        id={`${id}-title`} 
        className={`${TYPOGRAPHY.heading.h3} text-text-primary font-bold`}
      >
        {title}
      </h3>
      <p 
        id={`${id}-description`} 
        className={`${TYPOGRAPHY.body.normal} text-text-secondary`}
      >
        {description}
      </p>
    </div>
  );
}
