import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class AssignmentStep extends React.Component {

  render() {
  const { values,handleChange,catalogs } = this.props;
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
          value={ values.role === 0 ? '' : catalogs.roles.filter(role => role.id === values.role)[0].id }
          onChange={ handleChange }
            inputProps={{
              name: 'role',
              id: 'role',
            }}
            >{
              catalogs.roles.map(role => (
                <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl required fullWidth>
          <InputLabel htmlFor="department">Department</InputLabel>
          <Select
          value={ values.department === 0 ? '' : catalogs.departments.filter(department => department.id === values.department)[0].id }
          onChange={ handleChange }
            inputProps={{
              name: 'department',
              id: 'department',
            }}
            >
            {
              catalogs.departments.map(department => (
                <MenuItem key={department.id} value={department.id}>{department.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </Grid>
        { values.role === 1 && <Grid item xs={12} sm={6}>
        <FormControl required fullWidth>
          <InputLabel htmlFor="jobPosition">Job position</InputLabel>
          <Select
          value={ values.jobPosition === 0 ? '' : catalogs.jobPositions.filter(jobPosition => jobPosition.id === values.jobPosition)[0].id }
          onChange={ handleChange }
            inputProps={{
              name: 'jobPosition',
              id: 'jobPosition',
            }}
            >
            {
              catalogs.jobPositions.map(jobPosition => (
                <MenuItem key={jobPosition.id} value={jobPosition.id}>{jobPosition.name}</MenuItem>
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
