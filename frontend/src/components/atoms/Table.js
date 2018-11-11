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
function createData(deadline, task, taskOwner, department, state) {
  id += 1;
  return { id: id, deadline, task, taskOwner, department, state };
}

const data = [
  createData('2018-11-19','Vyzvednout si notebook', 'Marie Admin', 'IT', 'New'),
  createData('2018-11-21','Doložit potvrzení o studiu', 'Marie Admin', 'Accountancy', 'Submitted'),
  createData('2018-11-22','Přečíst si BOZP', 'Marie Admin', 'HR', 'Submitted'),
  createData('2018-11-28','Dodat potrzení od lékaře', 'Marie Admin', 'HR', 'Done'),
  createData('2018-12-04','Přihlásit se na školení', 'Marie Admin', 'HR', 'New'),
  createData('2018-12-05','Dostavit se na focení', 'Marie Admin', 'Marketing', 'Done'),
  createData('2018-12-12','Požádat o přístupy do systémů', 'Marie Admin', 'IT', 'New'),
  createData('2018-12-12','Vyzvednout si přístupovou kartu', 'Marie Admin', 'HR', 'New'),
  createData('2018-12-14','Dodat zápočtový list', 'Marie Admin', 'Accountancy', 'New'),
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
                  {n.deadline}
                </TableCell>
                <TableCell>{n.deadline}</TableCell>
                <TableCell>{n.task}</TableCell>
                <TableCell>{n.taskOwner}</TableCell>
                <TableCell numeric>{n.state}</TableCell>
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
