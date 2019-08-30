import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function RestaurantListItem({restaurant: {name, phone, type, website, color}}){

 return (
  <TableRow >
   <TableCell align="center">{type}</TableCell>
   <TableCell align="center"component="th" scope="row">{name}</TableCell>
   <TableCell align="center"><a href={`tel:${phone}`}>{phone}</a></TableCell>
   <TableCell align="center"><a href={website}>{website}</a></TableCell>
  </TableRow>
 )
}