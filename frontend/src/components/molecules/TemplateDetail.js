import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconDescription from '@material-ui/icons/Description';
import IconClose from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class TemplateDetail extends React.Component {
  state = {
    openedId: this.props.openedId,
    scroll: 'paper',
  };

  handleClose = () => {
    this.setState({ openedId: 0 });
  };

  render() {
    const template = this.props.template;
    const {classes, handleClose, handleChangeState} = this.props;

    if (this.props.open && template ) {
      return (
          <Dialog
            onEscapeKeyDown = { handleClose }
            open={this.props.open }
            onClose={this.handleClose}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title" fullWidth>
            <DialogTitle id="scroll-dialog-title">
              Title
              { /*template.template_name */}
              <IconClose onClick={ handleClose } className="float-right hover:shadow-inner" />
              </DialogTitle>

          </Dialog>
      );
    } else {
      return (
        <Dialog>
          <DialogTitle> No template </DialogTitle>
        </Dialog>
      );
    }
  }
}

export default withStyles(styles)(TemplateDetail);
