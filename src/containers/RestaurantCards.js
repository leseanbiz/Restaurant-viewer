import React from 'react';
import RestaurantCard from '../components/RestaurantCard';

function RestaurantCards({restaurants}) {
 
 return (
   <div>
   {restaurants.map(restaurant =>  <RestaurantCard {...{restaurant}} key={restaurant.id} />)
   }
   </div>
   
  );
}

export default RestaurantCards;