import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ViewCardsSwitch({viewCards, toggleCards}) {

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch size="medium" checked={viewCards} onChange={toggleCards} />}
        label="Cards?"
        labelPlacement="top"
      />
    </FormGroup>
  );
}
