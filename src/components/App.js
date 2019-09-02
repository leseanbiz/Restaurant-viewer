import React, { useState, useEffect } from 'react';
import { Grid, createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import NavBar from './NavBar';
import RestaurantCards from '../containers/RestaurantCards';
import RestaurantList from '../containers/RestaurantList';
import ViewCardsSwitch from '../containers/ViewCardsSwitch';
import TypeFilter from '../containers/TypeFilter';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurants';
import SortButton from '../containers/SortButton';

const mapDispatchToProps = dispatch => {
  return {
    doFetchRestaurants: type => dispatch(fetchRestaurants(type)),
  }
}

const mapStateToProps = state => {
  return { 
            restaurants: state.restaurantsReducer,
          }
}

function App({ doFetchRestaurants, restaurants }) {

  const [viewMode, setViewMode ] = useState('light');
  const [viewCards, setViewCards] = useState(true);
  const [type, setType] = React.useState('');

  function handleChange(event) {
    setType(event.target.value);
    doFetchRestaurants(event.target.value);
}

  useEffect(() => {
    doFetchRestaurants('All');
  }, [])
  
  const toggleCards = () => {
    setViewCards(prev => !prev);
  };

  const handleViewChange = () => {
    viewMode === "light" ? setViewMode('dark') : setViewMode('light');
  }

  const theme = createMuiTheme({
    palette: {
      type: viewMode,
    },
  });
  
  return (
    <MuiThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Grid container spacing={3}>
          <NavBar {...{viewMode, handleViewChange, viewCards, setViewCards}}/>
        <Grid container justify="center">
          {/* put switches radio buttons here */}
          <TypeFilter {...{type, handleChange}}/>
          <ViewCardsSwitch {...{viewCards, toggleCards}} />
          <SortButton {...{type}}/>
        </Grid>
        <Grid container spacing={2}>
          {
            viewCards ?
              <RestaurantCards {...{restaurants}}/>
              :
              <RestaurantList {...{restaurants}}/>
          }
        </Grid>
    </Grid>
  </MuiThemeProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

