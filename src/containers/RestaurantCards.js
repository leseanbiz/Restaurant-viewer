import React from 'react';
import RestaurantCard from '../components/RestaurantCard';

export default function RestaurantCards({restaurants}) {
 console.log(restaurants)
 return (
   <div>
   {restaurants.map(card =>  <RestaurantCard card={card} key={card.id} />)
   }
   </div>
   
  );
}
