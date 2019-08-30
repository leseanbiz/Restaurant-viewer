import React, { useState } from 'react';
import { Grid, createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import Search from '../containers/Search';
import NavBar from './NavBar';
import Pagination from '../containers/Pagination';
import MovieCards from '../containers/MovieCards';
import FavSwitch from './FavSwitch';

function App() {

  const [query, setQuery] = useState('');
  const [viewFavs, setViewFavs ] = useState(false);
  const [viewMode, setViewMode ] = useState('light');

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
          <NavBar {...{viewMode, handleViewChange}}/>
        <Grid container>
          <Search 
            {...{query, setQuery}}
          />
        </Grid>
        <Grid container justify="center">
          <FavSwitch 
            {...{viewFavs, setViewFavs}} 
            label="View Favorites"
          />
        </Grid>
        <Grid container spacing={2}>
          <Pagination 
            {...{query}}
          />
        </Grid>
        <Grid container>
          <MovieCards {...{viewFavs}}/>
        </Grid>
      <Grid container spacing={2}>
        <Pagination 
          {...{query}}
        />
      </Grid>
    </Grid>
  </MuiThemeProvider>
  );
}

export default App;
