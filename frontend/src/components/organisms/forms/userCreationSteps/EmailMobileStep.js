import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


class EmailMobileStep extends React.Component {
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
              id="mobile"
              name="mobile"
              label="Phone Number"
              fullWidth
              autoComplete="phone"
              value={ values.mobile }
              onChange={ handleChange }
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
}

export default (EmailMobileStep);
