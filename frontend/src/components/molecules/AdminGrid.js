import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

import {DashboardTable} from '../molecules/DashboardTable';
import {SubmittedTable} from '../molecules/SubmittedTable';

const styles = theme => ({
  root: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 10,

   },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },

  gridTile: {
    backgroundColor: theme.palette.background.paper,
    marginRight: theme.spacing.unit * 2,
  },

  margin: {
    marginRight: theme.spacing.unit * 5,
  },
});

const data = [
  {
    id: 1,
    employee: 'Jan Pippal',
    new: 1,
    submitted: 3,
    returned: 0,
    done: 2,
  }, {
    id: 2,
    employee: 'Martin Matějka',
    new: 1,
    submitted: 3,
    returned: 0,
    done: 2,
  }, {
    id: 3,
    employee: 'Matěj Ďurica',
    new: 1,
    submitted: 3,
    returned: 0,
    done: 2,
  }, {
    id: 4,
    employee: 'Karel Zamestnanec',
    new: 1,
    submitted: 3,
    returned: 0,
    done: 2,
  }, {
    id: 5,
    employee: 'Vaclav Zamestnanec',
    new: 1,
    submitted: 3,
    returned: 0,
    done: 2,
  }
];

class AdminGrid extends Component {
  state = {
    employeeFilter: '',
    dateFilter: '',
    todayBadge: 1,
    weekBadge: 4,
    monthBadge: 7,
  }

  handleEmployeeFilter = (tile) => {
    console.log(tile.employee)
    this.setState({ employeeFilter: tile.employee })
  }

  handleDateFilter = (days) => {
    console.log(days)
    this.setState({ dateFilter: days })
  }

render () {
  const {classes} = this.props;

  return (
    <div className={classes.root}>
    <GridList className={classes.gridList} cols={3}>
      {data.map(tile => (
        <GridListTile key={tile.id} className={classes.gridTile}>
          <Button color="primary" fullWidth="true" onClick={event => this.handleEmployeeFilter(tile)}>
          <List component="nav" className={classes.root}>
            <ListItem>
              <ListItemText primary={<Typography component="h2" variant="headline">{tile.employee}</Typography>}/>
            </ListItem>
              <ListItemText primary={"New: " + tile.new}/>
              <ListItemText primary={"Submitted: " + tile.submitted}/>
              <ListItemText primary={"Returned: " + tile.returned}/>
              <ListItemText primary={"Done: " + tile.done}/>
          </List>
          </Button>
        </GridListTile>
      ))}
    </GridList>

    <Grid container spacing={24} className={classes.cardGrid}>
        <Grid item xs={12} md={8}></Grid>
        <Grid item xs={12} md={8}>
          <Badge color="secondary" badgeContent={this.state.todayBadge} className={classes.margin}>
            <Button color="primary" variant="contained" onClick={event => this.handleDateFilter(1)}>Today</Button>
          </Badge>
          <Badge color="secondary" badgeContent={this.state.weekBadge} className={classes.margin}>
            <Button color="primary" variant="contained" onClick={event => this.handleDateFilter(8)}>This Week</Button>
          </Badge>
          <Badge color="secondary" badgeContent={this.state.monthBadge} className={classes.margin}>
            <Button color="primary" variant="contained" onClick={event => this.handleDateFilter(32)}>This Month</Button>
          </Badge>
          <Button className={classes.margin} color="secondary" variant="contained" onClick={event => {
            this.handleEmployeeFilter('');
            this.handleDateFilter('');
          }}>All</Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>Recently submitted tasks</Typography>
        </Grid>
    </Grid>

    <Grid container spacing={24} className={classes.cardGrid}>
        <Grid item xs={12} md={8}>
          <DashboardTable filter={this.state.employeeFilter} dateFilter={this.state.dateFilter}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <SubmittedTable filter={this.state.employeeFilter} dateFilter={this.state.dateFilter}/>
        </Grid>
    </Grid>
  </div>
);
}}

export default withStyles(styles)(AdminGrid);
