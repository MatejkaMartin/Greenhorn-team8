import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from '../atoms/Link'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginBottom: 30,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class ButtonCreate extends Component {
  render() {

  const { classes } = this.props;

  return (
    <div>
    <Link to={this.props.redirectTo} className="no-underline">
      <Button variant="extendedFab" color="primary"  aria-label="Add" className={classes.button}>
        <AddIcon className={classes.extendedIcon} />
        {this.props.title}
      </Button>
    </Link>
    </div>
  );
  }
}


ButtonCreate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonCreate);
