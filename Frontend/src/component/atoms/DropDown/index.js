import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export function DropDownInput({
  value,
  onChange,
  label,
  name,
  options,
  error,
  errorText,
  fullWidth,
}) {
  return (
    <FormControl
      variant='outlined'
      error={error}
      style={{ marginTop: 10, marginBottom: 10 }}
      fullWidth={fullWidth}
    >
      <InputLabel htmlFor='outlined-age-native-simple'>{label}</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label={label}
        inputProps={{
          name: name,
          id: 'outlined-age-native-simple',
        }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {options.map((obj) => {
          return <MenuItem value={obj.val}>{obj.item}</MenuItem>;
        })}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
}
