import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function TypeFilter({type, handleChange, distinctTypes}) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Filter restaurant type</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          className={classes.group}
          value={type}
          onChange={handleChange}
        >
          {distinctTypes.map((restaurantType) => <FormControlLabel key={restaurantType} value={restaurantType} control={<Radio />} label={restaurantType} />)}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default TypeFilter;