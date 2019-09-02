import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function RestaurantListItem({restaurant: {name, phone, type, website, color}}){

 return (
  <TableRow >
   <TableCell align="center" style={{backgroundColor: color}}>{type}</TableCell>
   <TableCell align="center"component="th" scope="row">{name}</TableCell>
   <TableCell align="center"><a href={`tel:${phone}`}>{phone}</a></TableCell>
   <TableCell align="center">
    {
      website ? 
      <a href={website}>{website}</a> 
      : 
      <a href={`https://www.google.com/search?q=${name}`}>{name}</a>
     }
    </TableCell>
  </TableRow>
 )
}