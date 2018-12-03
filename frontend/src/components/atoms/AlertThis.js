import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getError,getIsError } from '../../services/error/reducer';
import { dismissError,setError } from '../../services/error/actions';
import { connect } from 'react-redux';

class AlertThis extends React.Component {

  handleClose = () => {
    this.props.dismissError()
  };

  render() {
    const { isError, error } = this.props;
    return (
      <div>
        <Dialog
          open={ isError }
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Something went wrong</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              { error }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state  => {
    const { errorReducer } = state
    return {
      error: getError(errorReducer),
      isError: getIsError(errorReducer)
    };
}

const mapDispatchToProps = {
  dismissError,
  setError
};

const connectedAlertThis = connect(mapStateToProps,mapDispatchToProps)(AlertThis);
export { connectedAlertThis as AlertThis };
