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
import { connect } from 'react-redux';
import { sortRestaurants } from '../actions/sort';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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

const theme = createMuiTheme({
  palette: {
    primary: { main: "#12103b"},
    secondary: { main: "#fe443e"},
  },
});

function SortButton({ doSortRestaurants, filterType }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const options = filterType === "All" ? ['Sort by id', 'Sort by name', 'Sort by type'] : ['Sort by id', 'Sort by name'];

  function handleMenuItemClick(event, index) {
   doSortRestaurants(options[index]);
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
      <ThemeProvider theme={theme}>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
          <Button>{options[selectedIndex]}</Button>
          <Button
            color="secondary"
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
      </ThemeProvider>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(SortButton);
