import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { Highlight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  viewModeIcon: {
    color: '#fff',
    '&:hover': {
      color:'red'
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#90CCF4"},
  },
});

export default function NavBar({viewMode, setViewMode, handleViewChange}) {
  const classes = useStyles();
  const viewToolTip = `${viewMode} mode`;

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography align="center" variant="h6" className={classes.title}>
              TMDB_Viewer
            </Typography>
            <Tooltip title={viewToolTip} aria-label={viewToolTip}>
              <IconButton
                aria-label={viewToolTip}
                className={classes.viewModeIcon}
                onClick={() => handleViewChange()}
                >
                  <Highlight />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
