import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { StyledButton } from './../theme.js'
import classNames from 'classnames';
import green from '@material-ui/core/colors/green';

//This is example if we would like to configure extra style for buttom
const styles = theme => ({
  button: {
    color: green,
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function LoginButton(props) {
  const { classes } = props;
  return (
      <StyledButton color="#000000" variant="outlined">
      Login
        <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
      </StyledButton>
  );
}

export default withStyles(styles)(LoginButton);
