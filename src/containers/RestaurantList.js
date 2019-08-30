import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import RestaurantListItem from '../components/RestaurantListItem'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { restaurants: state.restaurantsReducer}
}


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function RestaurantsList({restaurants}) {
  
  const headers = Object.keys(restaurants[0]).filter(header => {
    return header === 'id' || header === 'color' || header === 'image' ? false : true;
  });

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {headers.map(header => <TableCell align="center">{header}</TableCell>)}
        </TableRow>
      </TableHead>
        <TableBody>
          {restaurants.map(restaurant => (
            <RestaurantListItem {...{restaurant}} key={restaurant.id} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default connect(mapStateToProps)(RestaurantsList);