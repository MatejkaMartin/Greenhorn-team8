import React, {Component, Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
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

import moment from 'moment';

import {
  startFetchTasks,
  updateTask
} from '../../services/tasks/actions';
import {
  getTasks,
  getError,
  getIsError,
} from '../../services/tasks/reducer';
import { connect } from 'react-redux';

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  headRow = [
    { id: 'owner', numeric: false, label: 'Owner' },
    { id: 'taskName', numeric: true, label: 'Task' },
    { id: 'state', numeric: true, label: 'State' },
  ];

  render() {
    const {order, orderBy} = this.props;
    return (
      <TableHead>
        <TableRow>
          {this.headRow.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                sortDirection={orderBy === row.id ? order : false}>
                <Tooltip
                  title={ "Sort " +  row.label }
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


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  table: {
    minWidth: 300,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class ReturnedTaskTable extends Component {

  componentDidMount() {
    this.props.startFetchTasks();
  }

  constructor() {
    super();
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      date: date,
      order: 'asc',
      orderBy: 'assignee',
      page: 0,
      rowsPerPage: 5,
      selectedRowIds: [],
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleClick = (event,task) => {
    const { selectedRowIds } = this.state;
    let id = task.id;
    const selectedRowIdIndex = selectedRowIds.indexOf(id);
    let newSelectedRowIds = [];

    if (selectedRowIdIndex === -1) {
      newSelectedRowIds = newSelectedRowIds.concat(selectedRowIds, id);
    } else if (selectedRowIdIndex === 0) {
      newSelectedRowIds = newSelectedRowIds.concat(selectedRowIds.slice(1));
    } else if (selectedRowIdIndex === selectedRowIds.length - 1) {
      newSelectedRowIds = newSelectedRowIds.concat(selectedRowIds.slice(0, -1));
    } else if (selectedRowIdIndex > 0) {
      newSelectedRowIds = newSelectedRowIds.concat(
        selectedRowIds.slice(0, selectedRowIdIndex),
        selectedRowIds.slice(selectedRowIdIndex + 1),
      );
    }

    this.setState({ selectedRowIds: newSelectedRowIds });

  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleClose = () => {
    this.setState({ selectedRowIds: [] });
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChangeState = (taskState,taskId) => () => {
    this.props.updateTask(taskState,taskId)
    this.props.startFetchTasks();
  };

  isSelected = id => this.state.selectedRowIds.indexOf(id) !== -1;

  getSorting = (order, orderBy) => {
    return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => - this.desc(a, b, orderBy);
  }

  desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  dayDiff = (n) => {
    var today = moment(this.state.date);
    var deadline = moment(n.deadline);
    var diff = '';
    if (today > deadline) {
      diff = deadline.diff(today, 'days') - 1;
      return diff;
    }
    if (today < deadline) {
      diff = deadline.diff(today, 'days');
      return diff;
    }
  }


  render() {
    const { classes, tasks, filter, dateFilter } = this.props;

    let filteredByEmployee = filter ? tasks.filter(x => x.assignee.includes(filter)) : tasks;

    let filteredByState = 'returned' ? filteredByEmployee.filter(z => z.state.includes('returned')) : filteredByEmployee;

    let filteredByDate = dateFilter ? filteredByState.filter(y => (this.dayDiff(y) > -1 && this.dayDiff(y) < dateFilter)) : filteredByState;

    const {order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, tasks.length - page * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={tasks.length}/>

            <TableBody>
              {this.stableSort(filteredByDate, this.getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                  <Fragment key={n.id}>
                    <TableRow
                      hover
                      onClick={ event => this.handleClick(event, n) }
                      tabIndex={-1}
                      >
                      <TableCell component="th" scope="row">{n.owner}</TableCell>
                      <TableCell numeric>{n.taskName}</TableCell>
                      <TableCell numeric>{n.state}</TableCell>
                    </TableRow>
                      <TaskDetail task={n} open={ isSelected  } handleClose= { this.handleClose } handleChangeState = { this.handleChangeState } ></TaskDetail>
                      </Fragment>
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
          count={tasks.length}
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


const mapStateToProps = state => {
  const { taskReducer } = state;
  return {
    tasks: getTasks(taskReducer),
    error: getError(taskReducer),
    isError: getIsError(taskReducer),
  };
};

const mapDispatchToProps = {
  startFetchTasks,
  updateTask
};

const withStylesReturnedTaskTable = withStyles(styles)(ReturnedTaskTable);

const connectedReturnedTaskTable = connect(mapStateToProps,mapDispatchToProps)(withStylesReturnedTaskTable);
export {connectedReturnedTaskTable as ReturnedTaskTable} ;
