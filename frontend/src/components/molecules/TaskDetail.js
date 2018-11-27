import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IconDescription from '@material-ui/icons/Description';
import IconAdd from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
    taskState: this.props.task.state,
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleState = taskState => () => {
    this.setState({ open: false, taskState });
  };

  handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  handleAdd = () => {
    alert('You clicked the add icon.');
  };

  handleDownload = () => {
    alert('You clicked the download.');
  };

  render() {
    const task = this.props.task;
    const {classes} = this.props;
    return (
      <div>
        <IconButton onClick={this.handleClickOpen('paper')} color="primary">
          <IconDescription/>
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title">
          <DialogTitle id="scroll-dialog-title">
            {/* <div className={classes.grow}/>
            <IconButton onClick={this.handleClose} color="secondary">
              <IconClose/>
            </IconButton> */}
            <Typography variant="h5" gutterBottom>{task.task}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="subtitle1">Deadline: {task.deadline}</Typography>
              <Typography variant="subtitle1">Template: {task.template}</Typography>
              <Typography variant="subtitle1">Owner: {task.owner}</Typography>
              <Typography variant="subtitle1">Assignee: {task.assignee}</Typography>
              <Typography variant="subtitle1" gutterBottom>State: {this.state.taskState}</Typography>

              <Grid item="item" xs={12}>
                <Typography variant="h6" gutterBottom>
                Instructions
                </Typography>
                <Typography variant="subtitle1" gutterBottom>{task.detail}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
                  cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
              </Grid>

              <Grid item="item" xs={12}>
                <Typography variant="h6" gutterBottom>
                Attachments
                </Typography>
                <Chip
                  icon={<IconDescription/>}
                  label="File Name"
                  color="primary"
                  onClick={this.handleDownload}
                  onDelete={this.handleDelete}
                  className={classes.chip}
                  variant="outlined"/>
                <Chip
                  icon={<IconDescription/>}
                  label="file Name"
                  color="primary"
                  onClick={this.handleDownload}
                  onDelete={this.handleDelete}
                  className={classes.chip}
                  variant="outlined"/>
                <IconButton onClick={this.handleAdd} color="secondary">
                  <IconAdd/>
                </IconButton>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleState('return')} color="primary">
              Return
            </Button>
            <Button onClick={this.handleState('confirm')} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ScrollDialog);
