import React from 'react';
import { TextInput, ButtonInput } from '../../atoms';
import { Avatar, Typography, Grid } from '@material-ui/core';
import { MEDIA_URL } from '../../../redux/services';
export function UpdateProductForm({
  name,
  setName,
  price,
  setPrice,
  changeMedia,
  action,
  actionType,
  error,
  mediaLink,
}) {
  return (
    <div style={{ padding: 25 }}>
      {mediaLink && (
        <Grid style={{ textAlign: '-webkit-center' }}>
          <Typography variant='caption'>Current Product Image</Typography>
          <Avatar
            style={{ height: 100, width: 100 }}
            variant='square'
            src={MEDIA_URL + mediaLink}
          />
        </Grid>
      )}
      <TextInput
        required={true}
        id={'name'}
        name={'name'}
        value={name}
        onChange={(value) => setName(value)}
        label={'Product Name'}
        type={'text'}
        error={error.name}
        errorText={error.name}
        fullWidth={true}
      />
      <TextInput
        required={true}
        id={'price'}
        name={'price'}
        value={price}
        onChange={(value) => setPrice(value)}
        label={'Product Price'}
        type={'number'}
        fullWidth={true}
        error={error.price}
        errorText={error.price}
      />

      <TextInput
        required={true}
        id={'media'}
        name={'media'}
        onChange={(value) => changeMedia(value)}
        label={'Product Image'}
        type={'file'}
        InputLabelProps={{ shrink: true }}
        error={error.media}
        fullWidth={true}
        errorText={error.media}
      />

      <ButtonInput
        type={'button'}
        fullWidth={true}
        color={'primary'}
        onClick={() => action()}
        content={actionType === 'add' ? 'ADD' : 'UPDATE'}
        variant={'contained'}
      />
    </div>
  );
}
