import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class TemplatesTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
    };
  }

  handleClick(id) {
    // Selected is not just used in app
    this.setState({selected: id});
  }


  render() {
    const { classes } = this.props;
    const { templates } = this.props;

    const templatesRows = templates.map((template) =>
      <TableRow className={classes.row} key={template.id} >
        <TableCell component="th" scope="row" onClick={() => this.handleClick(template.id)}>
          {template.templateName}
        </TableCell>
        <TableCell>{template.taskInstructions}</TableCell>
      </TableRow>
    );

    const noTemplatRow= <TableRow><TableCell>No task templates</TableCell></TableRow>

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className="bg-green-lightest">
            <TableCell className="text-grey-darkest text-lg">Template name</TableCell>
            <TableCell className="text-grey-darkest text-lg">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {templatesRows.length > 0 ?
            templatesRows : noTemplatRow
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TemplatesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplatesTable);
