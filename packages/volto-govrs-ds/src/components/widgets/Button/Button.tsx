import React from 'react';

type Props = {
  DarkMode?: boolean;
  Circle?: boolean;
  OnClick?: () => void;
  Class: 1 | 2 | 3 ;
  Size?: 'small' | 'large';
  Block?: boolean;
  State?: 'loading' | 'disabled' | 'active';
  children?: React.ReactNode;
};

function Button({ DarkMode, Circle, OnClick, Class, Size, Block, State, children } : Props) {
  const classes = [
    'br-button',
    Block && 'block',
    Circle && 'circle',
    Class === 1 && 'primary',
    Class === 2 && 'secondary',
    DarkMode && 'dark-mode',
    Size,
    State !== 'disabled' && State,
  ].filter(Boolean).join(' ');

  return (
      <button
      className={classes}
      type="button"
      onClick={OnClick}
      disabled={State === 'disabled'}
      >
        {children}
      </button>
  );
}

export default Button;