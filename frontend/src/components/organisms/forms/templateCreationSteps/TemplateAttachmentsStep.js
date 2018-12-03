import React, { Component, Fragment }from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconDescription from '@material-ui/icons/Description';
import Dropzone from 'react-dropzone';
import { fromEvent } from 'file-selector';
import AddIcon from '@material-ui/icons/Add';

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

class TemplateAttachmentsStep extends Component {


  render() {
  const { values, handleAddFiles, handleDeleteFile, classes } = this.props;
  return (
    <Fragment>
      <Grid container spacing={24}>
          <Grid item={ true } xs={12}>
            <Typography variant="h6" gutterBottom>
            Attachments
            </Typography>
            <Fragment>
            <div className="dropzone" justify="center">
              <Dropzone
                className="flex items-center border-grey hover:border-black border rounded h-full"
                getDataTransferItems={evt => fromEvent(evt)}
                onDrop={(accepted, rejected) => { handleAddFiles(accepted) } }
              >
              <AddIcon className="text-grey"/>
              <div className="text-grey">Click or drop files here</div>
              </Dropzone>
            </div>
            {values.files.map((f,i) => (
              <Chip
              icon={<IconDescription/>}
              key={i}
              label= {f.path}
              color="primary"
              onDelete={() => {
                handleDeleteFile(f.name)
              }}
              className={classes.chip}
              variant="outlined"/>
            ))}
          </Fragment>
          </Grid>
        </Grid>
    </Fragment>
  );
}
}

export default withStyles(styles)(TemplateAttachmentsStep);
