import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class AssignmentStep extends React.Component {

  render() {
  const { values,handleChange,departments,roles,jobPositions } = this.props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Assignment
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <FormControl required fullWidth>
          <InputLabel htmlFor="role">Role</InputLabel>
          <Select
          value={ values.role }
          onChange={ handleChange }
            inputProps={{
              name: 'role',
              id: 'role',
            }}
            >{
              roles.map(role => (
                <MenuItem key={role.id} value={role.name}>{role.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl required fullWidth>
          <InputLabel htmlFor="department">Department</InputLabel>
          <Select
          value={ values.department }
          onChange={ handleChange }
            inputProps={{
              name: 'department',
              id: 'department',
            }}
            >
            {
              departments.map(department => (
                <MenuItem key={department.id} value={department.name}>{department.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </Grid>

        { values.role === 'Employee' && <Grid item xs={12} sm={6}>
        <FormControl required fullWidth>
          <InputLabel htmlFor="jobPosition">Job position</InputLabel>
          <Select
          value={ values.jobPosition }
          onChange={ handleChange }
            inputProps={{
              name: 'jobPosition',
              id: 'jobPosition',
            }}
            >
            {
              jobPositions.map(jobPosition => (
                <MenuItem key={jobPosition.id} value={jobPosition.name}>{jobPosition.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </Grid> }
      </Grid>
    </React.Fragment>
  );
}
}

export default (AssignmentStep);
