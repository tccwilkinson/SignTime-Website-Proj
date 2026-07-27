import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  variant = 'primary',
  as,
  to,
  href,
  type = 'button',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const classes = ['ui-btn', `ui-btn--${variant}`, className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} style={style} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} style={style} {...rest}>
        {children}
      </a>
    );
  }

  const Tag = as || 'button';
  return (
    <Tag type={Tag === 'button' ? type : undefined} className={classes} style={style} {...rest}>
      {children}
    </Tag>
  );
}
