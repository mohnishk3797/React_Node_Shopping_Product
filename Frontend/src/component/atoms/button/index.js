import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
Button.prototype = {};
export function ButtonInput({
  type,
  fullWidth,
  color,
  styles,
  onClick,
  content,
  variant,
  inlineStyle,
  size,
}) {
  return (
    <Button
      type={type || 'submit'}
      fullWidth={fullWidth || false}
      variant={variant || 'text'}
      color={color || 'primary'}
      className={styles}
      style={inlineStyle}
      size={size || 'medium'}
      onClick={onClick}
    >
      {content}
    </Button>
  );
}
