
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Images from '../images/program.jpg'
import {useAuth} from '../context/AuthContext'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow:'1px 2px 15px 1px',    
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
    height:'4rem',
    width:'4rem',
    backgroundColor:'lightblue'
  },
  
}));

export default function RecipeReviewCard({dataa}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const{ userData } = useAuth()
  const[fav,setFav]=React.useState(1)
  const[error,setError]=React.useState('')
  
  let c = dataa.internPost.companyName.charAt(0).toUpperCase()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const addToFav = () => {
    db.collection
  }
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          {c}
          </Avatar>
        }
       
        title={dataa.internPost.companyName}
        subheader={new Date(dataa.timestamp).toDateString()}
      />
      <CardMedia
        className={classes.media}
        image={Images}
        title={dataa.internPost.internTitle}
      />
      <CardContent>
        <Typography variant="h5"  display="initial" gutterBottom>
       category : {dataa.internPost.category}
        </Typography>
       
        <Typography variant="h5" display="initial" gutterBottom>
       Deadline : {dataa.internPost.internDeadline}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={addToFav}/>
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
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="h5">Intern Title:</Typography>
        <Typography paragraph>
         {dataa.internPost.internTitle}
        </Typography>

          <Typography variant='h5'>Intern Details:</Typography>
          <Typography paragraph>
            {dataa.internPost.internDescription}.
          </Typography>

          <Typography variant="h5">Company Details:</Typography>
          <Typography paragraph>
            {dataa.internPost.companyDescription}
          </Typography>

          <Typography variant="h5">Company Website:</Typography>
          <Typography paragraph>
           <a href={dataa.internPost.companyWebsite}>{dataa.internPost.companyWebsite}</a>
          </Typography>
  { userData?.isStudent === true?  <Button color="primary" variant="contained" style={{width:'100%'}} onClick={}>apply now </Button> :"" }
         
        </CardContent>
       
      </Collapse>
    </Card>
  );
}

