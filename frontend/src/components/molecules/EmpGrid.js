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
import Moment from 'react-moment';

import {EmpDashboardTable} from '../molecules/EmpDashboardTable';
import {ReturnedTaskTable} from '../molecules/ReturnedTaskTable';

const styles = theme => ({
  root: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 10,
   },
  gridList: {
    flexWrap: 'nowrap',
    maxWidth: 1400,
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

class EmpGrid extends Component {
  state = {
    data: [],
    dateFilter: '',
    todayBadge: '',
    weekBadge: '',
    monthBadge: '',
  }

  handleDateFilter = (days) => {
    this.setState({ dateFilter: days })
  }

  handleBadges = (today, week, month) => {
    this.setState({ todayBadge: today, weekBadge: week, monthBadge: month });
    }

  handleData = (data) => {
    this.setState({ data: data });
  }

render () {
  const {classes, user} = this.props;

  return (
    <div className={classes.root}>
    <GridList className={classes.gridList} cols={3}>
      {this.state.data.map(tile => (
        <GridListTile key={tile.id} className={classes.gridTile}>
          <Button color="primary" fullWidth="true">
          <List component="nav" className={classes.root}>
            <ListItem/>
              <ListItemText primary={<Typography component="h2" variant="headline" gutterBottom="true">{tile.taskName}</Typography>}/>
              <ListItemText primary={<Moment format="DD.MM.YYYY">{tile.deadline}</Moment>}/>
              <ListItemText primary={"Owner: " + tile.owner}/>
              <ListItemText primary={"State: " + tile.state}/>
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
          <Button className={classes.margin} color="secondary" variant="contained" onClick={event => this.handleDateFilter('')}>All</Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>Recently returned tasks</Typography>
        </Grid>
    </Grid>

    <Grid container spacing={24} className={classes.cardGrid}>
        <Grid item xs={12} md={8}>
          <EmpDashboardTable filter={user.name} dateFilter={this.state.dateFilter} handleBadges={this.handleBadges} handleData={this.handleData}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <ReturnedTaskTable filter={user.name} dateFilter={this.state.dateFilter}/>
        </Grid>
    </Grid>
  </div>
);
}}

export default withStyles(styles)(EmpGrid);
