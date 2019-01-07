import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconDescription from '@material-ui/icons/Description';

export class TemplateSummaryStep extends Component {

  render() {
    const { values } = this.props;
    return (

      <Fragment>
        <Typography variant="headline" gutterBottom={true}>
        Template summary
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Template title:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {values.templateTitle}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Task title:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {values.taskTitle}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Task instructions:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {values.taskInstructions}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom={true} color="primary">
        Future day:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        {values.futureDay}
        </Typography>
        &nbsp;

        {values.files.length !==0 &&
        <Fragment>
        <Typography variant="subheading" gutterBottom={true} color="primary">
        Files:
        </Typography>
        <Typography variant="title" gutterBottom={true}>
        { values.files.map((file,i) => ( <Chip icon={<IconDescription/>} key={i} label= {file.name} color="primary" variant="outlined"/>  ))}
        </Typography>
        </Fragment>}

      </Fragment>
    )
  }

}
export default TemplateSummaryStep;
