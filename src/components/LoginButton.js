import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

export function LoginButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.button}>
        Login
        <SaveIcon className={classes.rightIcon}></SaveIcon>
      </Button>
    </div>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);
