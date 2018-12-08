import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconDescription from '@material-ui/icons/Description';

export class TaskSummaryStep extends Component {

  render() {
    const { values } = this.props;
    return (

      <Fragment>
        <Typography variant="headline" gutterBottom>
          Task summary
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom color="primary">
        Task title :
        </Typography>
        <Typography variant="title" gutterBottom>
        {values.taskTitle}
        </Typography>
        &nbsp;

        <Typography variant="subheading" gutterBottom color="primary">
        Task Instructions:
        </Typography>
        <Typography variant="title" gutterBottom>
        {values.taskDescription}
        </Typography>
        &nbsp;

        { values.selectedEmployees.map((employee,i) => (
          <Fragment>
          <Typography variant="subheading" gutterBottom color="primary">
          Employee:
          </Typography>
          <Typography variant="title" gutterBottom>
            {employee.name}
          </Typography>
          <Typography variant="subheading" gutterBottom color="primary">
          {employee.name} Deadline:
          </Typography>
          <Typography variant="title" gutterBottom>
            { values.deadlines.filter((deadline) => { return deadline.id === employee.id })[0].deadline }
          </Typography>
          &nbsp;
          </Fragment>
        ))}

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
export default TaskSummaryStep;
