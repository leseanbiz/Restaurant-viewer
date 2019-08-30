import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import MovieCardDialog from './MovieCardDialog';
import Collapse from '@material-ui/core/Collapse';
import { Favorite, Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  infoIcon: {
    color: 'rgba(255, 255, 255, 0.54)',
    '&:hover':{
      color: '#EE7621',
    }
  },
  favIcon: {
    color: 'rgba(255, 255, 255, 0.54)',
    '&:hover':{
      color: 'rgba(168, 63, 57)',
    }
  },
  tileBar: {
   width: "100%",
   height:"100%",
   padding: 50
  }
}));

function MovieTile({ id, img, title, votes, popularity, releaseDate, overview, doAddFav, doDeleteFav }) {
  
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded)
  
  const tmdbImgUrl =  `https://image.tmdb.org/t/p/w500${img}`
  const fallbackImg = "https://ipsumimage.appspot.com/640x360?l=No+image+provided"
  const fallbackTitle = "no title provided";
  const infoTooltip = `info about ${title}`;
  const addFavTooltip = `add ${title} to favs`;
  const deleteFavTooltip = `delete ${title} from favs`;

  return (
   <GridListTile className={classes.tileBar} spacing={3}>
     <img src={ img ? tmdbImgUrl : fallbackImg } alt={title} />
     <GridListTileBar
       title={title ? title : fallbackTitle}
       subtitle={<span>release date: {releaseDate}</span>}
       votes={votes}
       actionIcon={
         <>
          <Tooltip title={infoTooltip} aria-label={infoTooltip}>
            <IconButton 
              aria-label={infoTooltip} 
              className={classes.infoIcon}
              onClick={handleExpandClick}
              aria-expanded={expanded}
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          {doAddFav ? 
            <Tooltip title={addFavTooltip} aria-label={addFavTooltip}>
              <IconButton
                aria-label={addFavTooltip}
                className={classes.favIcon}
                onClick={movie => doAddFav(movie)}
                >
                  <Favorite />
              </IconButton>
            </Tooltip>
            :
            <Tooltip title={deleteFavTooltip} aria-label={deleteFavTooltip}>
              <IconButton
                aria-label={deleteFavTooltip}
                className={classes.favIcon}
                onClick={id => doDeleteFav(id)}
                >
                  <Delete />
              </IconButton>
            </Tooltip>
          }


         </>
       }
         />
       <Collapse in={expanded} timeout="auto" unmountOnExit>
        <MovieCardDialog
          title={title}
          overview={overview}
          id={id}
          open={expanded}
          setOpen={setExpanded}
        />
      </Collapse>
   </GridListTile>
  );
}

export default MovieTile;