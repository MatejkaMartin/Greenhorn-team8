import React, { Component, Fragment }from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

class TaskSetDeadlineStep extends Component {

  render() {
  const {classes, values, handleDatePicker} = this.props;
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom={true}>
        Task deadlines
      </Typography>

      <List dense className={classes.root}>
        {values.selectedEmployees.map((employee,i) => (
          <ListItem key={employee.id}>
          <Grid container spacing={8} direction="row" justify="center" alignItems="center" className="border border-grey rounded">
            <Grid item xs={4}>
                <ListItemText primary={employee.name}/>
            </Grid>
            <Grid item xs={4} className='overflow-hidden'>
                { values.taskTitle }
            </Grid>
            <Grid item xs={4}>
                <TextField
                  required
                  id={employee.id}
                  label="Deadline"
                  type="date"
                  onChange={ (event) => { handleDatePicker(event,employee.id)} }
                  fullWidth
                  InputLabelProps={{shrink: true,}}
                  value = { values.deadlines.filter((deadline) => { return deadline.id === employee.id })[0].deadline }
                />
            </Grid>
          </Grid>
          </ListItem>
        ))}
      </List>    </Fragment>
  );
}
}

export default withStyles(styles)(TaskSetDeadlineStep);
