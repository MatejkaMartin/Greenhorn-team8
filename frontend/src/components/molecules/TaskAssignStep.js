import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import IconAdd from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit
  }
});

class TaskAssignStep extends React.Component {
  state = {
    value: ''
  };

  handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  handleAdd = () => {
    alert('You clicked the add icon.');
  };

  render() {
    const {classes} = this.props;
    return (<React.Fragment>
      <Typography variant="h6" gutterBottom="gutterBottom">
        Assign Task to Employees
      </Typography>
      <Grid container="container" spacing={24}>
        <Grid item="item" xs={12}>
          <Chip icon={<FaceIcon/>} label="Employee Name" color="primary" onDelete={this.handleDelete} className={classes.chip} variant="outlined"/>
          <Chip icon={<FaceIcon/>} label="Employee Name" color="primary" onDelete={this.handleDelete} className={classes.chip} variant="outlined"/>
          <Chip icon={<FaceIcon/>} label="Employee Name" color="primary" onDelete={this.handleDelete} className={classes.chip} variant="outlined"/>
          <Chip icon={<FaceIcon/>} label="Employee Name" color="primary" onDelete={this.handleDelete} className={classes.chip} variant="outlined"/>
          <IconButton onClick={this.handleAdd} color="secondary">
            <IconAdd/>
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>);
  }
}

export default withStyles(styles)(TaskAssignStep);
