import React from 'react';
import { TextInput, ButtonInput } from '../../atoms';
import { FormHelperText } from '@material-ui/core';
export function UpdateProductForm({
  classes,
  handleLogin,
  setLoginEmail,
  setLoginPassword,
  loginEmail,
  loginPassword,
  error,
}) {
  return (
    <div style={{ padding: 25 }}>
      <TextInput
        required={true}
        id={'name'}
        name={'name'}
        // value={loginEmail}
        // onChange={(value) => setLoginEmail(value)}
        label={'Product Name'}
        type={'text'}
        // error={error.loginEmail}
        // errorText={error.loginEmail}
        fullWidth={true}
      />
      <TextInput
        required={true}
        id={'price'}
        name={'price'}
        // value={loginPassword}
        // onChange={(value) => setLoginPassword(value)}
        label={'Product Price'}
        type={'text'}
        // error={error.loginPassword}
        fullWidth={true}
        // errorText={error.loginPassword}
      />
      <TextInput
        required={true}
        id={'price'}
        name={'price'}
        // value={loginPassword}
        // onChange={(value) => setLoginPassword(value)}
        label={'Product Image'}
        type={'file'}
        InputLabelProps={{ shrink: true }}
        // error={error.loginPassword}
        fullWidth={true}
        // errorText={error.loginPassword}
      />
      <ButtonInput
        type={'button'}
        fullWidth={true}
        color={'primary'}
        // onClick={() => handleLogin()}
        // styles={classes.loginBtn}
        content={'Update'}
        variant={'contained'}
      />
    </div>
  );
}
