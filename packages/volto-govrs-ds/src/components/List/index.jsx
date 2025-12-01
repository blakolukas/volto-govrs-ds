import React from 'react';
import DefaultVariant from './variants/Default';

const VARIANTS = {
  default: DefaultVariant,
  card: require('./variants/Card').default,
  link: require('./variants/Link').default,
  check: require('./variants/Check').default,
};

export default function List({
  items = [],
  variant,
  itemKey = (i) => i.id,
  className = '',
  ...rest
}) {
  const v = variant || 'default';
  const Variant = VARIANTS[v] || DefaultVariant;
  return (
    <Variant items={items} itemKey={itemKey} className={className} {...rest} />
  );
}
