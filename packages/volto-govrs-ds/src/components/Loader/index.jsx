import React from 'react';
import Default from './variants/Default';
import Percentage from './variants/Percentage';

const Loader = ({ variant = 'default', ...props }) => {
  const { size, spacing, ...rest } = props;
  if (variant === 'percentage') return <Percentage {...rest} />;
  return <Default {...rest} />;
};

export default Loader;
