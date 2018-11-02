import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    marginRight: 20,
  },
};

function ImageAvatar(props) {
  const { classes } = props;
  const src = props.src;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src={src} className={classes.avatar} />
    </div>
  );
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
