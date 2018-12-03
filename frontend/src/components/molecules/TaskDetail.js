import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IconDescription from '@material-ui/icons/Description';
import IconClose from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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

class TaskDetail extends React.Component {
  state = {
    openedId: this.props.openedId,
    scroll: 'paper',
  };

  handleClose = () => {
    this.setState({ openedId: 0 });
  };

  render() {
    const task = this.props.task;
    const {classes, handleClose, handleChangeState} = this.props;
    return (
        <Dialog
          onEscapeKeyDown = { handleClose }
          open={this.props.open }
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title" fullWidth>
          <DialogTitle id="scroll-dialog-title">
            {task.taskName}
            <IconClose onClick={ handleClose } className="float-right hover:shadow-inner" />
            </DialogTitle>
          <DialogContent>
              <Typography variant="subtitle1">Deadline: {task.deadline}</Typography>
              <Typography variant="subtitle1">Template: {task.template}</Typography>
              <Typography variant="subtitle1">Owner: {task.owner}</Typography>
              <Typography variant="subtitle1">Assignee: {task.assignee}</Typography>
              <Typography variant="subtitle1" gutterBottom>State: {task.state}</Typography>
              <Grid item={ true } xs={12}>
                <Typography variant="h6" gutterBottom>
                Instructions
                </Typography>
                <Typography variant="subtitle1" gutterBottom>{task.taskDetail}
                </Typography>
              </Grid>

              <Grid item={ true } xs={12}>
                <Typography variant="h6" gutterBottom>
                Attachments
                </Typography>
                {task.files && task.files.length > 0 && JSON.parse(task.files).map((file,i) => (
                <a key= {file.id} href ={ 'http://localhost:3030' + file.url} className="no-underline" target="_blank" rel="noopener noreferrer">
                <Chip
                  key= {file.id}
                  icon={<IconDescription/>}
                  label={ file.name }
                  color="primary"
                  className={classes.chip}
                  variant="outlined"/></a>
                ))}
              </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={ handleChangeState('submitted',task.id)} color="primary">
              Submit
            </Button>
            <Button onClick={ handleChangeState('returned',task.id)} color="primary">
              Return
            </Button>
            <Button onClick={ handleChangeState('done',task.id)} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

export default withStyles(styles)(TaskDetail);
