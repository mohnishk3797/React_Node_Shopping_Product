import React from 'react';
import Dialog from '@material-ui/core/Dialog';
export function ModalAtom({
  open,
  handleClose,
  maxWidth,
  children,
  backClick,
  fullWidth,
}) {
  return (
    <Dialog
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      fullWidth={fullWidth}
      disableBackdropClick={backClick}
    >
      {children}
    </Dialog>
  );
}
