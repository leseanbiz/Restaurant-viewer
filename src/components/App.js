import React, { useState, useEffect } from 'react';
import { Grid, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurants';
import NavBar from './NavBar';
import SortButton from '../containers/SortButton';
import RestaurantCards from '../containers/RestaurantCards';
import RestaurantList from '../containers/RestaurantList';
import ViewCardsSwitch from '../containers/ViewCardsSwitch';
import TypeFilter from '../containers/TypeFilter';
import { filterRestaurants } from '../actions/filter';
import logo from '../foureyes-logo.svg';

const mapDispatchToProps = dispatch => {
  return {
    doFetchRestaurants: () => dispatch(fetchRestaurants()),
    doFilterRestaurants: type => dispatch(filterRestaurants(type))
  }
}

const mapStateToProps = state => {
  return { 
            unfilteredRestaurants: state.restaurantsReducer.restaurants,
            filteredRestaurants: state.restaurantsReducer.filtered,
            loading: state.restaurantsReducer.loading,
            filterType: state.restaurantsReducer.filterType,
            types: state.restaurantsReducer.types
          }
}

function App({ doFetchRestaurants, doFilterRestaurants, unfilteredRestaurants, loading, filteredRestaurants, filterType, types }) {

  const [viewMode, setViewMode ] = useState('light');
  const [viewCards, setViewCards] = useState(true);

  const restaurants = filterType === "All" ? unfilteredRestaurants : filteredRestaurants;

  function handleChange(event) {
    doFilterRestaurants(event.target.value);
  }

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
      type: viewMode,
    },
  });

  return (
    
    <MuiThemeProvider theme={theme}>
      {
        loading ? 
        <div>
          <img src={logo} alt="logo" />
          <h3>Loading...</h3>
        </div>   
        :
        <Grid container spacing={3}>
            <NavBar {...{viewMode, handleViewChange, viewCards, setViewCards}}/>
          <Grid container justify="center">
            <TypeFilter {...{filterType, handleChange, types}}/>
            <ViewCardsSwitch {...{viewCards, toggleCards}} />
            <SortButton {...{filterType}}/>
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
      }
  </MuiThemeProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

