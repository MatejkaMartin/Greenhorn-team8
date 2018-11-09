import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, person } = this.props;

    return (
      <div>
      <Button size="small" color="primary" onClick={this.handleOpen}>
        View
      </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              { person.name }
            </Typography>
            <CardMedia
              className={classes.cardMedia}
              image={ person.avatar } // eslint-disable-line max-len
              title="Image title"
            />
            <Typography variant="subtitle1" id="simple-modal-description">
              <div>Role: { person.role }</div>
              <div>Department: { person.department }</div>
              { person.jobPosition && <div>Job position: { person.jobPosition }</div> }
              <div>Phone: { person.mobile }</div>
              <div>Email: { person.email }</div>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
