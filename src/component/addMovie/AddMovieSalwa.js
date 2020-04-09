import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { addMovie } from '../../action/Action';
import { connect } from 'react-redux';
import './addMovie.css'
// import ListMovie from '../listMovie/ListMovie';



const useStyles = makeStyles(theme => ({
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

function AddMovieSalwa(props) {


  const [movieName,setMoviename]= useState("")
  const [image,setImage]= useState("")
  const [years,setYears]= useState("")
  const [typeMovie,setTypemovie]= useState("")
  const [description,setDescription]= useState("")
  const [rating,setRating]= useState("")
  const objectAdd={movieName,image,years,typeMovie,description,rating,id:Date.now()}

  const handleChangeMovieName =(event) =>{
    setMoviename(event.target.value);
    }
  
  const handleChangeImage =(event) =>{
    setImage(event.target.value);
    }
  
  const handleChangeYears =(event) =>{
    setYears(event.target.value);
    }
  
  const handleChangeTypemovie =(event) =>{
    setTypemovie(event.target.value);
    }
  
  const handleChangeDescription =(event) =>{
    setDescription(event.target.value);
    }
  
  const handleChangeRating =(event) =>{
    setRating(event.target.value);
    }
  

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add New Movie 
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            
            <h2 id="transition-modal-title">Add New Movie</h2>
            <div className="container-input">
            <span>Name</span><input type="text" placeholder="movie name" onChange={handleChangeMovieName} value={movieName}/>
            <span>Image</span><input type="text" placeholder="image" onChange={handleChangeImage} value={image}/>
            <span>Years</span><input type="text" placeholder="years" onChange={handleChangeYears} value={years}/>
            <span>Type</span><input type="text" placeholder="type movie" onChange={handleChangeTypemovie} value={typeMovie}/>
            <span>Description</span><input type="text" placeholder="description" onChange={handleChangeDescription} value={description}/>
            <span>Rating</span><input type="text" placeholder="rating" onChange={handleChangeRating} value={rating}/>
            </div>
            <div className="container-btn-saveMovie">
        <Button size="small" color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button size="small" color="primary" onClick={()=>props.addNewMovie(objectAdd)}>
          Save
        </Button >
        </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapDispatchToState = (dispatch) =>{
  return{
        addNewMovie:(newMovie)=> dispatch(addMovie(newMovie))
  }
} 

export default connect(null, mapDispatchToState)(AddMovieSalwa)