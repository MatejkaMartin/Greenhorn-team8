import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconDescription from '@material-ui/icons/Description';

export class TaskSummaryStep extends Component {

  render() {
    const { values } = this.props;
    return (

      <Fragment>
        <Typography variant="h6" gutterBottom>
          Task summary
        </Typography>
        <Typography variant="h6" gutterBottom>
        Task title : { values.taskTitle }
        </Typography>
        <Typography variant="h6" gutterBottom>
        Task instructions : { values.TaskDetail }
        </Typography>
        { values.selectedEmployees.map((employee,i) => (
        <Typography variant="h6" gutterBottom>
          { employee.name }
        </Typography>
      ))}
      <Typography variant="body1" gutterBottom>Files
      { values.files.map((file,i) => ( <Chip icon={<IconDescription/>} key={i} label= {file.name} color="primary" variant="outlined"/>  ))}
    </Typography>
        </Fragment>

    )
  }

}
export default TaskSummaryStep;
