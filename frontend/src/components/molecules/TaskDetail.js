import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IconDescription from '@material-ui/icons/Description';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const task = this.props.task
    return (
      <div>
        <IconButton onClick={this.handleClickOpen('paper')}>
          <IconDescription/>
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title">
          <DialogTitle id="scroll-dialog-title">
            <Typography variant="h5" gutterBottom>{task.task}</Typography></DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="subtitle1">Deadline: {task.deadline}</Typography>
              <Typography variant="subtitle1">Template: {task.template}</Typography>
              <Typography variant="subtitle1">Owner: {task.owner}</Typography>
              <Typography variant="subtitle1">Assignee: {task.assignee}</Typography>
              <Typography variant="subtitle1" gutterBottom>State: {task.state}</Typography>
              <Typography variant="subtitle1">Detail: {task.detail}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
                cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Return
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ScrollDialog;
