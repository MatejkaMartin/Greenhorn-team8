import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconDescription from '@material-ui/icons/Description';

export class TemplateSummaryStep extends Component {

  render() {
    const { values } = this.props;
    return (

      <Fragment>
        <Typography variant="headline" gutterBottom>
        Template summary
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom color="primary">
        Template title:
        </Typography>
        <Typography variant="title" gutterBottom>
        {values.templateTitle}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom color="primary">
        Task title:
        </Typography>
        <Typography variant="title" gutterBottom>
        {values.taskTitle}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom color="primary">
        Task instructions:
        </Typography>
        <Typography variant="title" gutterBottom>
        {values.taskInstructions}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom color="primary">
        Future day:
        </Typography>
        <Typography variant="title" gutterBottom>
        {values.futureDay}
        </Typography>
        &nbsp;

        {values.files.length !==0 &&
        <Fragment>
        <Typography variant="subheading" gutterBottom color="primary">
        Files:
        </Typography>
        <Typography variant="title" gutterBottom>
        { values.files.map((file,i) => ( <Chip icon={<IconDescription/>} key={i} label= {file.name} color="primary" variant="outlined"/>  ))}
        </Typography>
        </Fragment>}

      </Fragment>
    )
  }

}
export default TemplateSummaryStep;
