import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from '../atoms/Link'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  const title = props.title;

  return (
    <div>
    <Link to="/people/add" class="no-underline">
      <Button variant="extendedFab" color="primary"  aria-label="Add" className={classes.button}>

        <AddIcon className={classes.extendedIcon} />
        {title}

      </Button>
      </Link>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
