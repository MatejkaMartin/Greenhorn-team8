import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  root: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: 30,
  },
  gridList: {
    flexWrap: '',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {

  },
});

const tileData = [
  {
    id: 1,
    title: 'Breakfast',
    author: 'Jan Pippal',
    deadline: '1.11.2018'
  },
  {
    id: 2,
    title: 'Tasty burger',
    author: 'Martin Matějka',
    deadline: '1.11.2018'
  },
  {
    id: 3,
    title: 'Camera',
    author: 'Matěj Ďurica',
    deadline: '1.11.2018'
  },
  {
    id: 4,
    title: 'Morning',
    author: 'Karel Novák',
    deadline: '1.11.2018'
  },
];

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>

        {tileData.map(tile => (
          <GridListTile key={tile.id}>
            <p>Task Owner: {tile.author}</p>
            <p>Deadline: {tile.deadline}</p>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,}}
              actionIcon={
                <IconButton>
                  <EditIcon className={classes.title} />
                </IconButton>}
              />
          </GridListTile>))}

      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
