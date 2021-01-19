import React from 'react';
import { TextField } from '@material-ui/core';
import propTypes from 'prop-types';
TextInput.propTypes = {};
export function TextInput({
  required,
  id,
  name,
  value,
  onChange,
  variant,
  label,
  type,
  error,
  errorText,
  disabled,
  fullWidth,
  onFocus,
  style,
  InputProps,
  InputLabelProps,
  placeholder,
  className,
}) {
  return (
    <TextField
      variant={variant || 'outlined'}
      margin='normal'
      required={required || false}
      fullWidth={fullWidth}
      onFocus={onFocus ? (event) => onFocus(event.target.name) : () => {}}
      id={id}
      className={className}
      placeholder={placeholder}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      label={label}
      name={name}
      style={style}
      error={error}
      disabled={disabled}
      helperText={errorText}
      value={value}
      type={type}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
