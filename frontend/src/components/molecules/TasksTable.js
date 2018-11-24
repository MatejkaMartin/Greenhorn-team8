import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import TaskDetail from '../molecules/TaskDetail.js';

const data = [
    {id: 1, task: 'Podepsat BOZP1', deadline: '12.11.2017', template: '3', owner: 'Jan Pippal', assignee: 'Matěj Ďurica', state: 'new', detail: ''},
    {id: 2, task: 'Prevzít notebook2', deadline: '12.11.2017', template: '2', owner: 'Roman Nguyen', assignee: 'Martin Matějka', state: 'new', detail: ''},
    {id: 3, task: 'Podepsat BOZP3', deadline: '12.11.2017', template: '3', owner: 'Jan Pippal', assignee: 'Matěj Ďurica', state: 'new', detail: ''},
    {id: 4, task: 'Prevzít notebook4', deadline: '12.11.2017', template: '2', owner: 'Roman Nguyen', assignee: 'Martin Matějka', state: 'new', detail: ''},
    {id: 5, task: 'Podepsat BOZP5', deadline: '12.11.2017', template: '3', owner: 'Jan Pippal', assignee: 'Matěj Ďurica', state: 'new', detail: ''},
    {id: 6, task: 'Prevzít notebook6', deadline: '12.11.2017', template: '2', owner: 'Roman Nguyen', assignee: 'Martin Matějka', state: 'new', detail: ''},
    {id: 7, task: 'Podepsat BOZP7', deadline: '12.11.2017', template: '3', owner: 'Jan Pippal', assignee: 'Matěj Ďurica', state: 'new', detail: ''},
    {id: 8, task: 'Prevzít notebook8', deadline: '12.11.2017', template: '2', owner: 'Roman Nguyen', assignee: 'Martin Matějka', state: 'new', detail: ''},
    {id: 9, task: 'Podepsat BOZP9', deadline: '12.11.2017', template: '3', owner: 'Jan Pippal', assignee: 'Matěj Ďurica', state: 'new', detail: ''},
    {id: 10, task: 'Prevzít notebook10', deadline: '12.11.2017', template: '2', owner: 'Roman Nguyen', assignee: 'Martin Matějka', state: 'new', detail: ''},
    {id: 11, task: 'Podepsat BOZP11', deadline: '12.11.2017', template: '3', owner: 'Jan Pippal', assignee: 'Matěj Ďurica', state: 'new', detail: ''},
    {id: 12, task: 'Prevzít notebook12', deadline: '12.11.2017', template: '2', owner: 'Roman Nguyen', assignee: 'Martin Matějka', state: 'new', detail: ''},
];

const headRow = [
  { id: 'task', numeric: false, disablePadding: true, label: 'Task' },
  { id: 'deadline', numeric: true, disablePadding: false, label: 'Deadline' },
  { id: 'template', numeric: true, disablePadding: false, label: 'Template' },
  { id: 'owner', numeric: true, disablePadding: false, label: 'Owner' },
  { id: 'assignee', numeric: true, disablePadding: false, label: 'Assignee' },
  { id: 'state', numeric: true, disablePadding: false, label: 'State' },
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

//-----------------headRow----------------------------------------------------------------------------
class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };
  render() {
    const {order, orderBy} = this.props;
    return (
      <TableHead>
        <TableRow>
        <TableCell padding="none"/>
          {headRow.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}>

                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}>
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}
EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

//----------Table-----------------------------------------------------------------------------
export class TasksTable extends Component {
  state = {
    order: 'asc',
    orderBy: 'deadline',
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleClick = property => event => {
    console.log('property', property);
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const {order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper>
        <div>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}/>

            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return (
                    <TableRow
                      hover
                      onClick={this.handleClick(n)}
                      tabIndex={-1}
                      key={n.id}>

                      <TableCell padding="checkbox">
                      <TaskDetail open={this.state.openDialog} task={n}/>
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.task}
                      </TableCell>
                      <TableCell numeric>{n.deadline}</TableCell>
                      <TableCell numeric>{n.template}</TableCell>
                      <TableCell numeric>{n.owner}</TableCell>
                      <TableCell numeric>{n.assignee}</TableCell>
                      <TableCell numeric>{n.state}</TableCell>
                    </TableRow>
                  );
                })}

              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{'aria-label': 'Previous Page',}}
          nextIconButtonProps={{'aria-label': 'Next Page',}}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

TasksTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (TasksTable);
