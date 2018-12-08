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

import {EmpDashboardTable} from '../molecules/DashboardTable';
import {EmpReturnedTable} from '../molecules/EmpReturnedTable';

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
    employee: 'Jan Pipal',
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
    employee: 'Josef Novák',
    new: 1,
    submitted: 3,
    returned: 0,
    done: 2,
  }
];

class EmpGrid extends Component {
  state = {
    employeeFilter: '',
    timeFilter: '',
  };

  handleEmployeeFilter = (event, tile) => {
    console.log(tile)
    this.setState({ employeeFilter: tile.employee })
  }

  handleTimeFilter = (event) => {
    console.log(event)
    this.setState({ timeFilter: event })
  }

render () {
  const {classes} = this.props;
  const {filter} = this.state;

  return (
    <div className={classes.root}>
    
    <GridList className={classes.gridList} cols={3}>
      {data.map(tile => (
        <GridListTile key={tile.id} className={classes.gridTile} onClick={event => this.handleEmployeeFilter(event, tile)}>
          <List component="nav" className={classes.root}>
            <ListItem>
              <ListItemText primary={<Typography component="h2" variant="headline">{tile.employee}</Typography>}/>
            </ListItem>
              <ListItemText primary={"New: " + tile.new}/>
              <ListItemText primary={"Submitted: " + tile.submitted}/>
              <ListItemText primary={"Returned: " + tile.returned}/>
              <ListItemText primary={"Done: " + tile.done}/>
          </List>
        </GridListTile>
      ))}
    </GridList>

    <Grid container spacing={24} className={classes.cardGrid}>
        <Grid item xs={12} md={8}></Grid>
        <Grid item xs={12} md={8}>
          <Badge color="secondary" badgeContent={4} className={classes.margin}>
            <Button color="primary" variant="contained" onClick={event => this.handleTimeFilter(event)}>Today</Button>
          </Badge>
          <Badge color="secondary" badgeContent={4} className={classes.margin}>
            <Button color="primary" variant="contained" onClick={event => this.handleTimeFilter(event)}>This Week</Button>
          </Badge>
          <Badge color="secondary" badgeContent={4} className={classes.margin}>
            <Button color="primary" variant="contained" onClick={event => this.handleTimeFilter(event)}>This Month</Button>
          </Badge>
          <Button className={classes.margin} color="primary" variant="contained" onClick={event => this.handleTimeFilter(event)}>All</Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Badge color="secondary" badgeContent={4} className={classes.margin}>
            <Typography>Recently submitted</Typography>
          </Badge>
        </Grid>
    </Grid>

    <Grid container spacing={24} className={classes.cardGrid}>
        <Grid item xs={12} md={8}>
          <EmpDashboardTable filter={filter}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <EmpReturnedTable filter={filter}/>
        </Grid>
    </Grid>
  </div>
);
}}

export default withStyles(styles)(EmpGrid);
