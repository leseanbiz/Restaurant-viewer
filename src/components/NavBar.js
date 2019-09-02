import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider } from '@material-ui/styles';
import { Highlight } from '@material-ui/icons';
import logo from '../foureyes-logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  title: {
    display: "block",
    maxWidth:"230px",
    maxHeight:"95px",
    marginTop: "15px",
    width: "auto",
    height: "auto",
  },
  viewModeIcon: {
    color: '#fff',
    '&:hover': {
      color:'#fe443e'
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#12103b"},
  },
});

export default function NavBar({viewMode, handleViewChange}) {
  const classes = useStyles();
  const viewToolTip = `${viewMode} mode`;

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Tooltip title={viewToolTip} aria-label={viewToolTip}>
              <IconButton
                aria-label={viewToolTip}
                className={classes.viewModeIcon}
                onClick={() => handleViewChange()}
                >
                  <Highlight />
              </IconButton>
            </Tooltip>
            <img src={logo} className={classes.title} alt="foureyes-logo" />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
