import React from 'react';
import { Grid } from '@material-ui/core';
import SearchField from '../components/SearchField';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';

const mapDispatchToProps = dispatch => {
  return {
    doFetchMovies: query => dispatch(fetchMovies(query)),
  }
}

function Search({ query, setQuery, doFetchMovies }) {
  
  function handleSearchFetchMovies(event) {
   if (event.keyCode === 13) {
    doFetchMovies(query);
   }
  }

  return (
        <Grid container item xs={12} justify="center">
          <SearchField
            setQuery={setQuery}
            query={query}
            handleSearchFetchMovies={handleSearchFetchMovies}
          />
      </Grid>
  );
}

export default connect(null, mapDispatchToProps)(Search);
