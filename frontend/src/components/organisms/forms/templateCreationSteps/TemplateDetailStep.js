import React, { Component, Fragment }from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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

class TemplateDetailStep extends Component {

  render() {
    const { values, handleChange } = this.props;

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Template Details
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={12}>
        <TextField
          required
          id="templateTitle"
          name="templateTitle"
          label="Template Title"
          fullWidth
          autoComplete="title"
          value={ values.templateTitle }
          onChange= { handleChange }
        />
      </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="taskTitle"
            name="taskTitle"
            label="Task Title"
            fullWidth
            autoComplete="title"
            value={ values.taskTitle }
            onChange= { handleChange }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="taskInstructions"
            name="taskInstructions"
            label="Task instructions"
            fullWidth
            multiline
            rowsMax="5"
            value={ values.taskInstructions }
            onChange= { handleChange }
          />
        </Grid>
        </Grid>
    </Fragment>
  );
}
}

export default withStyles(styles)(TemplateDetailStep);
