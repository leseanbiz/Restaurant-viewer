import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridList, makeStyles} from'@material-ui/core';
import MovieTile from '../components/MovieTile';
import { addFav, deleteFav } from '../actions/favorites';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 350,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.results,
    favorites: state.favoritesReducer,
    }
  };

  const mapDispatchToProps = dispatch => {
  return {
    doAddFav: movie => dispatch(addFav(movie)),
    doDeleteFav: id => dispatch(deleteFav(id))
  }
}

function MovieCards({ movies, favorites, doAddFav, doDeleteFav, viewFavs }) {
  
  const classes = useStyles();


  return (
      <div>

    <Grid container justify="space-evenly">
      {(!favorites || !movies) ? null :
        viewFavs ? favorites.map(favorite => {
          const { id, backdrop_path, title, vote_count, votes_average, release_date, overview } = favorite;
            return (
              <GridList cellHeight="auto" key={id} className={classes.gridList} spacing={3}>
                <MovieTile
                  id={id}
                  img={backdrop_path}
                  title={title}
                  votes={vote_count}
                  popularity={votes_average}
                  releaseDate={release_date}
                  overview={overview}
                  doDeleteFav={() => doDeleteFav(id)}
                />
              </GridList>
            )
          }
        ) : movies.map(movie => {
          const { id, backdrop_path, title, vote_count, votes_average, release_date, overview } = movie;
            return (
              <GridList cellHeight="auto" key={id} className={classes.gridList} spacing={3}>
                <MovieTile
                  id={id}
                  img={backdrop_path}
                  title={title}
                  votes={vote_count}
                  popularity={votes_average}
                  releaseDate={release_date}
                  overview={overview}
                  doAddFav={() => doAddFav(movie)}
                />
              </GridList>
            )
          }
        )
      }
      </Grid>
      </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCards);
