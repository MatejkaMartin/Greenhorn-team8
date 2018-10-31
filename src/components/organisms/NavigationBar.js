import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Assessment';
import TasksIcon from '@material-ui/icons/Assignment';

import {Link} from '../atoms/Link'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    //marginLeft: drawerWidth,
    //[theme.breakpoints.up('sm')]: {
    //  width: `calc(100% - ${drawerWidth}px)`
    //}
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
    selectedIndex: null
  };

  handleProfileMenuOpen = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleMenuClose = () => {
    this.setState({anchorEl: null});
  };

  handleDrawerToggle = () => {
    this.setState(state => ({
      mobileOpen: !state.mobileOpen
    }));
  };

  handleListItemClick = (event, index) => {
    this.setState({selectedIndex: index});
  };

  render() {
    const {classes, theme} = this.props;
    const {anchorEl} = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const pageName = this.props.className;
    const children = this.props.children;
    const pageindex = this.props.idmenu;

    const renderProfileMenu = (<Menu anchorEl={anchorEl} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }} open={isMenuOpen} onClose={this.handleMenuClose}>
      <Link to="/setting" class="no-underline">
      <MenuItem onClick={this.handleMenuClose}>Settings</MenuItem>
      </Link>
      <Link to="/" class="no-underline">
      <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
      </Link>
    </Menu>);

    const renderDrawer = (<div>
      <div className={classes.toolbar}/>
      <Divider/>
      <List>
        <Link className="no-underline" to="/dashboard">
          <ListItem button="button" selected={this.state.selectedIndex === 0} onClick={event => this.handleListItemClick(event, 0)}>
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
        </Link>

        <Link className="no-underline" to="/tasks">
          <ListItem button="button" selected={this.state.selectedIndex === 1} onClick={event => this.handleListItemClick(event, 1)}>
            <ListItemIcon>
              <TasksIcon/>
            </ListItemIcon>
            <ListItemText primary="Tasks"/>
          </ListItem>
        </Link>

        <Link className="no-underline" to="/people">
          <ListItem button="button" selected={this.state.selectedIndex === 2} onClick={event => this.handleListItemClick(event, 2)}>
            <ListItemIcon>
              <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="People"/>
          </ListItem>
        </Link>
      </List>
      <Divider/>
    </div>);

    return (
      <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap="noWrap">
            {pageName}
          </Typography>

          <div className={classes.grow}/>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" onClick={console.log('bla', pageindex)}>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton aria-owns={isMenuOpen
                ? 'material-appbar'
                : undefined} aria-haspopup="true" onClick={this.handleProfileMenuOpen} color="inherit">
              <AccountCircle/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderProfileMenu}

      <nav className={classes.drawer}>
        <Hidden smUp="smUp" implementation="css">
          <Drawer container={this.props.container} variant="temporary" anchor={theme.direction === 'rtl'
              ? 'right'
              : 'left'} open={this.state.mobileOpen} onClose={this.handleDrawerToggle} classes={{
              paper: classes.drawerPaper
            }} ModalProps={{
              keepMounted: true,
            }}>
            {renderDrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown="xsDown" implementation="css">
          <Drawer classes={{
              paper: classes.drawerPaper
            }} variant="permanent" open="open">
            {renderDrawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <article>{children}</article>
      </main>

    </div>);
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);
