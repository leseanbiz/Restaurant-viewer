import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(3),
  },
}));

export default function ViewCardsSwitch({viewCards, toggleCards}) {

  const classes = useStyles();
  
  return (
    <FormGroup className={classes.root}>
      <FormControlLabel
        control={<Switch size="medium" checked={viewCards} onChange={toggleCards} />}
        label="Cards?"
        labelPlacement="top"
      />
    </FormGroup>
  );
}
