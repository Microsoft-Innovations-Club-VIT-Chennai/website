import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IParticlesProps } from 'react-tsparticles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 3,
    maxWidth: 345,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    '&:hover': {
      boxShadow: '0 4px 8px 0 rgba(10, 10, 10, 10.2), 0 6px 20px 0 rgba(10, 10, 10, 0.19)'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function EventComponent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(props.data){
    var display = props.data.events.info.map(function(event,i){
      return(
        <div className="event-cards col-xs-10 col-md-3.5">
          <Card key={event.avatar} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="event" className={classes.avatar}>
                  {event.avatar}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={event.title}
              subheader={event.subheader}
            />
            <CardMedia
              className={classes.media}
              image={event.imageURL}
              title={event.title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {event.desc}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="More"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph><b>{event.MoreHeader}</b></Typography>
                <Typography paragraph>
                  {event.MoreDetail}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      )
    })
  }

  return (
    <div className="event-component container-fluid">
      <div className="row align-items-center justify-content-center">
          <h1 className="display-7 typing-main heading">
              Events from us
          </h1>
      </div>
      <div className="event-scrollbox row">
        {display}
      </div>
    </div>
  );
}