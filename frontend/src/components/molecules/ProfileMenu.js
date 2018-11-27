import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { logout } from '../../actions/user.actions';
import { connect } from 'react-redux';

import {Link} from '../atoms/Link'
import ImageAvatar from '../atoms/Avatar'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class ProfileMenu extends React.Component {
  state = {
    open: false,
  };

  onClick = (e) => {
    if (this.anchorEl.contains(e.target)) {
      return;
    }

    this.setState({ open: false });
    const { logout } = this.props;
    logout();
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (e) => {
    if (this.anchorEl.contains(e.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const { name, roleID } = this.props.user;
    let role;

    if (roleID === 2) {
      role = <div className="text-xs">Admin</div>;
    } else {
      role= <div className="text-xs">Employee</div>;
    }

    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={this.handleToggle}>

            <ImageAvatar src="https://www.obchod-rybareni.cz/fotky58279/fotos/58279_71413__vyr_71412kapr-supinac.jpg"/>

            <div className="no-underline" >

            <div className="text-base">{ name }</div>
            {role}
          </div>
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <Link className="no-underline" to="/setting"><MenuItem onClick={this.handleClose}>Setting</MenuItem></Link>
                      <div className="no-underline" to="/"><MenuItem onClick={this.onClick}>Logout</MenuItem></div>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

ProfileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withStylesProfileMenu  = withStyles(styles)(ProfileMenu);

const mapDispatchToProps = {
  logout,
};

const connectedProfileMenu = connect(null,mapDispatchToProps)(withStylesProfileMenu);
export { connectedProfileMenu as ProfileMenu };
