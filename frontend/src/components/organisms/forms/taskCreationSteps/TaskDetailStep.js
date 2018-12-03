import React, { Component, Fragment }from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

class TaskDetailStep extends Component {



  render() {
    const { values,handleTaskInfo, handleTemplateChange } = this.props;
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Task Details
      </Typography>
      <FormControl required fullWidth>
        <InputLabel htmlFor="templates">Use template</InputLabel>
        <Select
        value={ values.selectedTemplate === 0 ? 0 : this.props.templates.filter(template => template.id === values.selectedTemplate)[0].id }
        onChange={ handleTemplateChange }
          inputProps={{
            name: 'templates',
            id: 'templates',
          }}
          >
            <MenuItem key= { 3  } value= { 0 } >No template</MenuItem>
            {
              this.props.templates.map(template => (
                <MenuItem key={template.id} value={template.id}>{template.templateName}</MenuItem>
              ))
            }
        </Select>
      </FormControl>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            required
            id="taskTitle"
            name="taskTitle"
            label="Task Title"
            fullWidth
            autoComplete="title"
            value={ values.taskTitle }
            onChange= { handleTaskInfo }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="taskDescription"
            name="taskDescription"
            label="Instructions"
            fullWidth
            multiline
            rowsMax="5"
            value={ values.taskDescription }
            onChange= { handleTaskInfo }
          />
        </Grid>
        </Grid>
    </Fragment>
  );
}
}

export default withStyles(styles)(TaskDetailStep);
