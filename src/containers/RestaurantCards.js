import React from 'react';
import { Grid, GridList, makeStyles} from'@material-ui/core';
import RestaurantCard from '../components/RestaurantCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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

function RestaurantCards({restaurants}) {

  const classes = useStyles();
 
  return (
    <Grid container justify="center" direction="row" alignItems="center" spacing={2}>
    {
      restaurants.map(restaurant => (
        <GridList cellHeight="auto" key={restaurant.id} className={classes.gridList}>
          <RestaurantCard {...{restaurant}}  />
        </GridList>
      ))
    }
    </Grid>
  );
}

export default RestaurantCards;
