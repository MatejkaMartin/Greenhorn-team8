import React, { Component, Fragment }from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

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

class TemplateSetFutureDayStep extends Component {

  render() {

  const { values, handleChange  } = this.props;

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Template Future Day
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Input
            required
            type="number"
            min="1" max="30"
            id="futureDay"
            name="futureDay"
            label="Template future day"
            fullWidth
            autoComplete="title"
            value= { values.futureDay }
            onChange= { handleChange }
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
}

export default withStyles(styles)(TemplateSetFutureDayStep);
