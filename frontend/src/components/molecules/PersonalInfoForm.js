import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class PersonalInfoForm extends React.Component {
  state = {
    role: '',
    department: '',
    jobPosition: '',
    labelWidth: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
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
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="confPassword"
            name="confPassword"
            label="Confirmation Password"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl required fullWidth>
          <InputLabel htmlFor="role">Role</InputLabel>
          <Select
            value={this.state.role}
            onChange={this.handleChange}
            inputProps={{
              name: 'role',
              id: 'role',
            }}
            >{
              this.props.roles.map(role => (
                <MenuItem index={role.id} value={role.name}>{role.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl required fullWidth>
          <InputLabel htmlFor="department">Department</InputLabel>
          <Select
            value={this.state.department}
            onChange={this.handleChange}
            inputProps={{
              name: 'department',
              id: 'department',
            }}
            >
            {
              this.props.departments.map(department => (
                <MenuItem index={department.id} value={department.name}>{department.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl required fullWidth>
          <InputLabel htmlFor="jobPosition">Job position</InputLabel>
          <Select
            value={this.state.jobPosition}
            onChange={this.handleChange}
            inputProps={{
              name: 'jobPosition',
              id: 'jobPosition',
            }}
            >
            {
              this.props.jobPositions.map(jobPosition => (
                <MenuItem index={jobPosition.id} value={jobPosition.name}>{jobPosition.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
}

export default (PersonalInfoForm);
