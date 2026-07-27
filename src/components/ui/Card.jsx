import React from 'react';
import './Card.css';

export default function Card({
  as: Tag = 'div',
  hover = true,
  padded = true,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const classes = ['ui-card', hover && 'ui-card--hover', padded && 'ui-card--padded', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  );
}
