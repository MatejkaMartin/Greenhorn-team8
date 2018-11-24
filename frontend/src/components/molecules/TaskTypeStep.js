import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class TaskTypeStep extends React.Component {
  state = {
    value: 'adhoc'
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  render() {
    return (<React.Fragment>
      <Typography variant="h6" gutterBottom="gutterBottom">
        Choose Task Type
      </Typography>
      <Grid center="center">
        <FormControl component="fieldset">
          <RadioGroup aria-label="Type" name="type" value={this.state.value} onChange={this.handleChange}>
            <FormControlLabel value="adhoc" control={<Radio />} label="Ad-Hoc"/>
            <FormControlLabel value="template" control={<Radio />} label="Template"/>
          </RadioGroup>
        </FormControl>
      </Grid>
    </React.Fragment>);
  }
}

export default TaskTypeStep;
