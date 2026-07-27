import React from 'react';
import './SectionHeader.css';

export default function SectionHeader({
  as = 'h2',
  align = 'center',
  eyebrow,
  heading,
  accent,
  accentBreak = false,
  subhead,
  className = '',
  style = {},
  ...rest
}) {
  const HeadingTag = as;

  return (
    <div className={`ui-sh ui-sh--${align} ${className}`.trim()} style={style} {...rest}>
      {eyebrow && <div className="ui-sh-eyebrow">{eyebrow}</div>}

      <HeadingTag className="ui-sh-heading">
        {heading}
        {accent && (
          <>
            {accentBreak ? <br /> : ' '}
            <span className="ui-sh-accent">{accent}</span>
          </>
        )}
      </HeadingTag>

      {subhead && <p className="ui-sh-subhead">{subhead}</p>}
    </div>
  );
}
