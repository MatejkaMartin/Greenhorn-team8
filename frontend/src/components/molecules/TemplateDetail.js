import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconClose from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    const { handleClose } = this.props;

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
        <Dialog open={ this.props.open }>
          <DialogTitle> No template </DialogTitle>
        </Dialog>
      );
    }
  }
}

export default withStyles(styles)(TemplateDetail);
