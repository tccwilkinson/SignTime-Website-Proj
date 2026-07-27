import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ children, delay = 0, className = '', as = 'div', style = {}, ...rest }) {
  const ref = useScrollReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
