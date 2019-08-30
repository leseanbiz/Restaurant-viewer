import React, { useState, useEffect } from 'react';
import { Grid, createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import NavBar from './NavBar';
import RestaurantCards from '../containers/RestaurantCards';
import RestaurantList from '../containers/RestaurantList';
import ViewCardsSwitch from '../containers/ViewCardsSwitch';
import TypeFilter from '../containers/TypeFilter';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurants'
// import {restaurants, restaurantTypes} from '../data';

const mapDispatchToProps = dispatch => {
  return {
    doFetchRestaurants: () => dispatch(fetchRestaurants()),
  }
}

function App({doFetchRestaurants}) {

  const [viewMode, setViewMode ] = useState('light');
  const [viewCards, setViewCards] = useState(true);

  useEffect(() => {
    doFetchRestaurants();
  }, [])

  const toggleCards = () => {
    setViewCards(prev => !prev);
  };

  const handleViewChange = () => {
    viewMode === "light" ? setViewMode('dark') : setViewMode('light');
  }

  const theme = createMuiTheme({
    palette: {
      type: viewMode, // Switching the dark mode on is a single property value change.
    },
  });
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={3}>
          <NavBar {...{viewMode, handleViewChange, viewCards, setViewCards}}/>
        <Grid container justify="center">
          {/* put switches radio buttons here */}
          <TypeFilter />
          <ViewCardsSwitch {...{viewCards, toggleCards}} />
        </Grid>
        <Grid container>
          {
            viewCards ?
              <RestaurantCards />
              :
              <RestaurantList />
          }
        </Grid>
    </Grid>
  </MuiThemeProvider>
  );
}

export default connect(null, mapDispatchToProps)(App);

