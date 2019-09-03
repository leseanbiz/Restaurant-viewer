import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LinkIcon from '@material-ui/icons/Link'
import PhoneIcon from '@material-ui/icons/Phone';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import MoodIcon from '@material-ui/icons/Mood';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FastFoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    marginLeft: '15%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: red[500],
  },
  icon: {
    alignSelf: "center",
  }
}));

export default function RestaurantCard({restaurant: {name, phone, type, website, image, color}}) {
  const classes = useStyles();
  const icons = {
    Brewpub: <FastFoodIcon />,
    Restaurant: <RestaurantIcon />,
    Cafe: <LocalCafeIcon />,
    Sushi: <MoodIcon />,
    Diner: <LocalDiningIcon />
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{ backgroundColor: color}}>
            {icons[type]}
          </Avatar>
        }
        title={name}
        subheader={type}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <LinkIcon className={classes.icon}/>
          {
            website ? 
            <a href={website}>{name}</a> 
            : 
            <a href={`https://www.google.com/search?q=${name}`}>{name}</a>
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <PhoneIcon />
          <a href={`tel:${phone}`}>{phone}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
