import React from 'react'
import { FormControlLabel, Switch} from '@material-ui/core';

const FavSwitch = ({viewFavs, setViewFavs, label}) =>(
   <FormControlLabel
     control={<Switch onChange={() => setViewFavs(!viewFavs)} />}
     label={label}
   />
)

export default FavSwitch;

