import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import  SimpleModal  from './SimpleModal';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});


class PeopleList extends Component {

  render () {
  const { people,classes, deletePerson } = this.props;
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
          <Grid container spacing={40}>
            {people.map(person => (
              <Grid item key={person.id} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={ person.avatar } // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      { person.name }
                    </Typography>
                    <Typography>
                    <div>{ person.role }</div>
                    <div>{ person.department }</div>
                    { person.role !== 'Admin' && <div>{ person.jobPosition }</div>}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary" onClick={  () => { deletePerson(person.id) } }>
                      Delete
                    </Button>
                    <SimpleModal person={ person }/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </main>
    </React.Fragment>
  );
}
}

PeopleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PeopleList);
