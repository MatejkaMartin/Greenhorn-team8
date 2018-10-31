import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import logo from '../../img/greenhornlogo.png';
import {PageFooter} from '../molecules/PageFooter';
import calendar from '../../img/calendar.png';
import employee from '../../img/employee.png';


const drawerWidth = 240;
const height = 75;

const styles = theme => ({
  root: {
    height: height,
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      height: height,
      zIndex: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: height,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    height: height
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,

  },
});

class ResponsiveDrawer extends React.Component {

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme, user, onClick } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key="Tasks">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Setting">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerToggle}
            className={classes.menuButton}
          >
          <MenuIcon />
          </IconButton>

          <div className="w-full flex content-between items-center">
            <div className="text-sm flex-grow">
              <Link className="text-muted" to="/">
              <img src={logo} className="h-16" alt="logo"/>
              </Link>
            </div>
            <button className="w-32" onClick={onClick}>
              <div className="no-underline" >
                <div className="group hover:bg-green-dark bg-transparent shadow-md text-green-dark font-semibold py-2 px-4 border border-green rounded">
                  <div className="text-base group-hover:hidden">{user.name}</div>
                  <div className="text-xs group-hover:hidden">{user.role}</div>
                  <div className="text-base hidden group-hover:block group-hover:text-white">Logout</div>
                  <div className="text-xs hidden group-hover:invisible group-hover:block group-hover:text-white">user</div>
                </div>
              </div>
            </button>
          </div>

         </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          { /*  Contentt of the page */ }
          <div>
            <br/>
              <h2 className="mt-4">Welcome XXX, nice to meet you again. </h2>
            <br/>
          </div>
            {/*IF USER PAK*/}
            <div>
              <h2>Your tasks:</h2>
              <br/>
            </div>
            <img src={calendar} className="" alt="calendar"/>

                {/*IF ADMIN PAK*/}
            <div>
              <h2>Your employees:</h2>
              <br/>
            </div>
            <img src={employee} className="mb-10" alt="employee"/>
          <PageFooter/>

        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
