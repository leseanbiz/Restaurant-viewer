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

function TypeFilter({filterType, handleChange, types}) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Filter restaurant type</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          className={classes.group}
          value={filterType}
          onChange={handleChange}
        >
          {types.map((type) => <FormControlLabel key={type.type} value={type.type} control={<Radio style={{color: type.color}} />} label={type.type} />)}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default TypeFilter;