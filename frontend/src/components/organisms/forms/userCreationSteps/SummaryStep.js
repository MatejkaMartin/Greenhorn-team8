import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

 class SummaryStep extends Component {

  render() {
    const { values, catalogs } = this.props;
    return (

      <React.Fragment>
        <Typography variant="headline" gutterBottom={true}>
        Employee summary
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        First name:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {values.firstName}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Last name:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {values.lastName}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Email:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {values.email}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Mobile:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {values.mobile}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Role:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {catalogs.roles.filter(role => role.id === values.role)[0].name}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Department:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {catalogs.departments.filter(department => department.id === values.department)[0].name}
        </Typography>
        &nbsp;

        {values.jobPosition !==0 &&
        <React.Fragment>
        <Typography variant="subheading" gutterBottom={true} color="primary">
        Job position:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {catalogs.jobPositions.filter(jobPosition => jobPosition.id === values.jobPosition)[0].name}
        </Typography>
        </React.Fragment>}

      </React.Fragment>
    )
  }

}
export default SummaryStep;
