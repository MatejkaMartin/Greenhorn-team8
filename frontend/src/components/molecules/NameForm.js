import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class NameForm extends React.Component {



  render() {
  const { values,handleChange } = this.props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Name
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First Name"
          fullWidth
          autoComplete="name"
          value={ values.firstName }
          onChange={ handleChange }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          fullWidth
          autoComplete="lname"
          value={ values.lastName }
          onChange={ handleChange }
        />
      </Grid>
      </Grid>
    </React.Fragment>
  );
}
}

export default (NameForm);
