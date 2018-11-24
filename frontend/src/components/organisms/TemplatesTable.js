import React from 'react';
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

let id = 0;
function createData(templateName, description) {
  id += 1;
  return { id, templateName, description};
}

const rows = [
  createData('Template', 'First template'),
  createData('Template 1', 'Second template')
];

function TemplatesTable(props) {
  const { classes } = props;

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
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <TableCell component="th" scope="row">
                  {row.templateName}
                </TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TemplatesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplatesTable);
