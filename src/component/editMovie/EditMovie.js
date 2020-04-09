import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { editMovie } from '../../action/Action';
import { connect } from 'react-redux';




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

function EditMovie(props) {
 
    const el=props.el

  const [movieName,setMoviename]= useState(el.movieName)
  const [image,setImage]= useState(el.image)
  const [years,setYears]= useState(el.years)
  const [typeMovie,setTypemovie]= useState(el.typeMovie)
  const [description,setDescription]= useState(el.description)
  const [rating,setRating]= useState(el.rating)
//   const objectAdd={movieName,image,years,typeMovie,description,rating,id:Date.now()}

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
  const updateMovie=(id)=>{
    let obj={movieName,image,years,typeMovie,description,rating}
    props.editMovie(obj,id)
}
  return (
    <div>
        
      <button type="button" onClick={handleOpen}>
        Edit Movie 
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
            
            <h2 id="transition-modal-title">Edit Movie</h2>
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
        <Button size="small" color="primary" onClick={()=>updateMovie(el.id)}>
          Save
        </Button >
        </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
const mapStateToProps =(state)=>{
    return{
        data:state.listMovie,
        editM:state.listMovie
    };
 };
 


export default connect(mapStateToProps, {editMovie})(EditMovie)