import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import dropRight from 'lodash';
import { connect } from 'react-redux';
import { sortRestaurants } from '../actions/sort'

const options = ['Sort by id', 'Sort by name', 'Sort by type'];

const mapDispatchToProps = dispatch => {
 return {
  doSortRestaurants: value => dispatch(sortRestaurants(value))
 }
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    color: "#12103b"
  },
}));

function SortButton({ doSortRestaurants, type }) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleMenuItemClick(event, index) {
   doSortRestaurants(options[index]);
   if(type !== "All" || type !== ''){
    dropRight(options, 1);
   }
   setSelectedIndex(index);
   setOpen(false);
  }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  }

  return (
    <div className={classes.root}>
        <ButtonGroup variant="contained" color={"#12103b"} ref={anchorRef} aria-label="split button">
          <Button>{options[selectedIndex]}</Button>
          <Button
            color={'#fe443e'}
            size="small"
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        // disabled={}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
  );
}

export default connect(null, mapDispatchToProps)(SortButton);
