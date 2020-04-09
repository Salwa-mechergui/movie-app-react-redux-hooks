import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './listMovie.css'
import { deletMovie, editMovie } from '../../action/Action';
import EditMovie from '../editMovie/EditMovie';
import Rating from '../Rating'




const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

 function ListMovie(props) {
    const classes = useStyles();
    return (
        <div className="container-cards">
            {props.data.filter(el=>el.movieName.toLowerCase().includes(props.x.toLowerCase())).map((el,i)=>(
            <div className="container-card">
             
                                   
        <Card className={classes.root}>
            <CardActionArea>
              <Rating el={el}/>
                <CardMedia 
                className={classes.media} image={el.image} title="show description" 
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 {el.movieName}
                </Typography>
                <div className="container-years-type">
                <Typography variant="body2" color="textSecondary" component="p">
                {el.years}
                </Typography>   <Typography variant="body2" color="textSecondary" component="p">
                {el.typeMovie}
                </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                {el.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <EditMovie el={el}/>
                <Button size="small" color="primary" onClick={()=>props.deletMovie(el.id)} >
                Delete Movie
                </Button>
            </CardActions>
            </Card>
            </div>
            ))}
        </div>
    )
}
const mapStateToProps =(state)=>{
   return{
       data:state.listMovie,
       x:state.searchMovie,
       editM:state.listMovie
   };
};

export default connect(mapStateToProps,{deletMovie, editMovie}) (ListMovie)





