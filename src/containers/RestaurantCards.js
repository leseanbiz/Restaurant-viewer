import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { restaurants: state.restaurantsReducer}
}

function RestaurantCards({restaurants}) {
 
 return (
   <div>
   {restaurants.map(restaurant =>  <RestaurantCard {...{restaurant}} key={restaurant.id} />)
   }
   </div>
   
  );
}

export default connect(mapStateToProps)(RestaurantCards)