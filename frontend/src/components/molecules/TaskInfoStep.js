import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import IconDescription from '@material-ui/icons/Description';
import IconAdd from '@material-ui/icons/Add';

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

class TaskInfoStep extends React.Component {
    handleDelete = () => {
      alert('You clicked the delete icon.');
    };

    handleAdd = () => {
      alert('You clicked the add icon.');
    };

    handleTemplate = () => {
      alert('You clicked the add template.');
    };

  render() {
    const { classes, values, handleChange, type } = this.props;
  return (
    <React.Fragment>
        {type==='adhoc' ? (
          <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Task Informations
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              label="Task Title"
              fullWidth
              autoComplete="title"
              value={ values.title }
              onChange={ handleChange }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="instructions"
              name="instructions"
              label="Instructions"
              fullWidth
              multiline
              rowsMax="5"
              value={ values.instructions }
              onChange={ handleChange }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="deadline"
              label="Deadline"
              type="datetime-local"
              fullWidth
              InputLabelProps={{shrink: true,}}
              defaultValue="2017-05-24T10:30"
              value={ values.deadline }
              onChange={ handleChange }
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
            Attachments
            </Typography>
            <Chip icon={<IconDescription/>} label="File Name" color="primary" onDelete={this.handleDelete} className={classes.chip} variant="outlined"/>
            <Chip icon={<IconDescription/>} label="file Name" color="primary" onDelete={this.handleDelete} className={classes.chip} variant="outlined"/>
            <IconButton onClick={this.handleAdd} color="secondary">
              <IconAdd/>
            </IconButton>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={24}>
        <Grid item="item" xs={12}>
        <Typography variant="h6" gutterBottom>
        Templates
        </Typography>
        </Grid>
        <Grid item="item" xs={12}>
        <IconButton onClick={this.handleTemplate} color="secondary">
          <IconAdd/>
        </IconButton>
        </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}
}

export default withStyles(styles)(TaskInfoStep);
