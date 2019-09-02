import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RestaurantCard({restaurant: {name, phone, type, website, image, color}}) {
  const classes = useStyles();
  console.log(color)
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{ backgroundColor: color}}>
            {type.charAt(0)}
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
          {
            website ? 
            <a href={website}>{website}</a> 
            : 
            <a href={`https://www.google.com/search?q=${name}`}>{name}</a>
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <a href={`tel:${phone}`}>{phone}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
