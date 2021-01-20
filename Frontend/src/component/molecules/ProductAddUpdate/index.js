import React from 'react';
import { ModalAtom } from '../../atoms';
import {
  Paper,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { UpdateProductForm } from './ProductForm';
export function ProductUpdateDialog({
  handleClose,
  open,
  name,
  setName,
  price,
  setPrice,
  changeMedia,
  actionType,
  action,
  error,
  mediaLink,
}) {
  return (
    <ModalAtom
      open={open}
      handleClose={handleClose}
      maxWidth={'sm'}
      backClick={false}
      fullWidth={true}
    >
      <DialogContent>
        <DialogContentText>
          <DialogTitle id='max-width-dialog-title'>
            <Typography
              variant='h6'
              align={'center'}
              color='textSecondary'
              noWrap
            >
              {actionType === 'add' ? 'Add' : 'Update'} Product Details
            </Typography>
          </DialogTitle>
        </DialogContentText>
      </DialogContent>
      <UpdateProductForm
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        changeMedia={changeMedia}
        action={action}
        actionType={actionType}
        error={error}
        mediaLink={mediaLink}
      />
    </ModalAtom>
  );
}
