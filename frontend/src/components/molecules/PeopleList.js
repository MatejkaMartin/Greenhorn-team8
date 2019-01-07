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
import Popup from '../molecules/Popup';
import api from '../../api';

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

  state = {
    users: [],
    errorMessage: null,
    isError: false
  }

  componentDidMount() {
    this.fetchPeople();
  }

  fetchPeople = async () => {
    await api.get('users')
    .then((response) => {
      const { data } = response;
      this.setState({ users: data.users });
    })
    .catch(() => {
      this.setState({ errorMessage: 'Failed to load users', isError: true })
    })
    ;
  }

  handleOnClosePopup = () => {
    this.setState({ errorMessage: null, isError: false })
  }


    deletePerson = (id) => {
      api.delete('users/delete/'+ id)
      .then(() => {
         this.setState({ users: this.state.users.filter(user => user.id !== id ) })
      })
      .catch(() => {
        this.setState({ errorMessage: 'Failed to delete user', isError: true })
      })
    }


  render () {
  const { user, classes } = this.props;
  const { isError, errorMessage, users } = this.state;
  return (
    <React.Fragment>
    <Popup isOpened= { isError }  message = { errorMessage } handleOnClosePopup = { this.handleOnClosePopup }/>

      <CssBaseline />
      <main className={classes.layout}>
          <Grid container spacing={40}>
            {users.map(person => (
              <Grid item key={person.id} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={ person.avatar } // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom={true} variant="h5" component="h2">
                      { person.name }
                    </Typography>
                    <div>{ person.role }</div>
                    <div>{ person.department }</div>
                    { person.role !== 'admin' && <div>{ person.jobPosition }</div>}
                  </CardContent>
                  <CardActions>
                  { user.role === 'admin' &&
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  }
                    { user.role === 'admin' &&
                    <Button size="small" color="primary" onClick={  () => { this.deletePerson(person.id) } }>
                      Delete
                    </Button>
                    }
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
