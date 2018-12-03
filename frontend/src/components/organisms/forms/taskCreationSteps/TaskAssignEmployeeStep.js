import React, { Component, Fragment }from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class TaskAssignEmployeeStep extends Component {
  state = {
  checked: [1],
  };

  render() {
  const { classes,values,handleAssignEmployees } = this.props;
  return (
    <Fragment>
    <Typography>Assign { values.taskTitle } to: </Typography>
    <List dense className={classes.root}>
      {this.props.employees.map((employee,i) => (
        <ListItem key={employee.id} button onClick={() => {handleAssignEmployees(employee)}}>
          <ListItemText primary={employee.name}/>
          <ListItemSecondaryAction onClick={() => {handleAssignEmployees(employee)}}>
            <Checkbox
              checked={values.selectedEmployees.indexOf(employee) !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
    </Fragment>
  );
}
}

export default withStyles(styles)(TaskAssignEmployeeStep);
