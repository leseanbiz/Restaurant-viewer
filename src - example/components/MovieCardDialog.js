import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Typography } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions/details';
import { Link } from '@material-ui/icons';
import Slide from '@material-ui/core/Slide';
import StarRateIcon from '@material-ui/icons/StarRate';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

const mapDispatchToProps = dispatch => {
 return {
   doFetchDetails: id => dispatch(fetchDetails(id)),
 }
}

const mapStateToProps = state => {
 return {
   details: state.detailsReducer,
   }
 };

 const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function MovieCardDialog({open, setOpen, overview, id, title, details, doFetchDetails}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
   if(id !== details.id){
    doFetchDetails(id);
   }
  })

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>      
          <Typography variant="subtitle2">
            Overview:
          </Typography>
          <Typography variant="body1">
            {overview}
          </Typography> 
        </DialogContent>
        <DialogActions>
        <Typography variant="subtitle2" gutterBottom style={{ marginRight: "2rem", marginTop: "10px"}}>
          <Tooltip title="vote average" aria-label="vote average">
            <Badge color="secondary" badgeContent={details.vote_average}>
              <StarRateIcon />
            </Badge>
          </Tooltip>
        </Typography> 
          <Tooltip title="IMDB link" aria-label="IMDB link">
            <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${details.imdb_id}`}><Link /></a> 
          </Tooltip>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardDialog)