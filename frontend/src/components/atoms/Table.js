import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData( name, calories, fat, carbs, protein ) {
  id += 1;
  return { id, name, calories, fat, carbs, protein};
}

const data = [
  createData('1.11.2018', "Podepsat smlouvu", "Honza", "IT", "Done"),
  createData('2.11.2018', "Podepsat smlouvu", "Honza", "HR", "Submitted"),
  createData('3.11.2018', "Podepsat smlouvu", "Honza", "Financea", "Returned"),
  createData('4.11.2018', "Podepsat smlouvu", "Honza", "Ucetnictvi", "New"),
  createData('5.11.2018', "Podepsat smlouvu", "Honza", "IT", "New"),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Deadline</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Task Owner</TableCell>
            <TableCell>Department</TableCell>
            <TableCell numeric>State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell>{n.calories}</TableCell>
                <TableCell>{n.fat}</TableCell>
                <TableCell>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
