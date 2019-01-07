import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../img/ghlogo.png';

const styles = theme => ({
  heroContent: {
    maxWidth: 300,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 4}px 0 0`,
  },
});

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom={true}>
              <img src={Logo} alt="logo" title="logo"/>
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              ...for easy start in new job.
            </Typography>
          </div>
        </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(Album);
