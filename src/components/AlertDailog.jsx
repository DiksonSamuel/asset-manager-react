import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const AlertDialog = ({ open, handleClose, title, description, cancelButton, confirmButton, handleConfirm, confirmColor }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {cancelButton}
        </Button>
        <Button onClick={handleConfirm} className={confirmColor} color="secondary" autoFocus>
          {confirmButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
