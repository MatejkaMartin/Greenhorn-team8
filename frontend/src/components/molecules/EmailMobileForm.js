import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class EmailMobileForm extends React.Component {
  render() {
  const { values,handleChange } = this.props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Email & Phone
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            value={ values.email }
            onChange={ handleChange }
          />
        </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone Number"
              fullWidth
              autoComplete="phone"
              value={ values.phone }
              onChange={ handleChange }

            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
}

export default (EmailMobileForm);
