import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Popup  extends Component {

  render() {
    const { message, isOpened, handleOnClosePopup } = this.props;
    return (
      <div>
        <Dialog
          open={isOpened}
          onClose={handleOnClosePopup}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Server error"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              { message }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOnClosePopup} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Popup;
