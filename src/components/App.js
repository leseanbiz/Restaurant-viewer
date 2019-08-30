import React, { useState } from 'react';
import { Grid, createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import NavBar from './NavBar';
import RestaurantCards from '../containers/RestaurantCards';
import RestaurantList from '../containers/RestaurantList';
import ViewCardsSwitch from '../containers/ViewCardsSwitch';
// import {restaurants, restaurantTypes} from '../data';

function App() {

  const [viewMode, setViewMode ] = useState('light');
  const [viewCards, setViewCards] = useState(true);

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

export default App;

