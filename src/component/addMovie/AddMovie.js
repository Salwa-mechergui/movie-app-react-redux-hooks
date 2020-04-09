import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {addMovie} from '../../action/Action'
import  './addMovie.css'

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

function AddMovie(props) {


    const [movieName,setMoviename]=useState("")
    const [image,setImage]=useState("")
    const [years,setYears]=useState("")
    const [typeMovie,setTypemovie]=useState("")
    const [description,setDescription]=useState("")
    const [rating,setRating]=useState("")
    const objetAdd={movieName,image,typeMovie,description,rating,years}


   const handleChangeMovieName=(event)=>{
        setMoviename(event.target.value)
    }
   const handleChangeImage=(event)=>{
        setImage(event.target.value)
    }
   const handleChangeYears=(event)=>{
        setYears(event.target.value)
    }
   const handleChangeTypeMovie=(event)=>{
        setTypemovie(event.target.value)
    }
   const handleChangeDescription=(event)=>{
        setDescription(event.target.value)
    }
   const handleChangeRating=(event)=>{
        setRating(event.target.value)
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
        Add new Movie
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
            <h2 id="transition-modal-title">Modal Add New Movie</h2>
            <div className="container-input">
           <input type="text" placeholder="Add new Movie Name" onChange={handleChangeMovieName} value={movieName}/>
           <input type="text"  onChange={handleChangeImage} value={image} placeholder="Add new Image"/>
           <input type="text"  onChange={handleChangeYears} value={years} placeholder="Add new year"/>
           <input type="text"  onChange={handleChangeTypeMovie} value={typeMovie} placeholder="Add new Type Movie"/>
           <input type="text"  onChange={handleChangeDescription} value={description} placeholder="Add new Description"/>
           <input type="text"  onChange={handleChangeRating} value={rating} placeholder="Add new Rate Movie"/>
           <div className="container-btn-saveMovie">
           <Button size="small" color="primary" onClick={()=>props.addNewMovie(objetAdd)}>
               Save
                </Button>
                <Button size="small" color="primary" onClick={handleClose}>
                Cancel
                </Button>
           </div>
           </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addNewMovie:(newMovie)=>dispatch(addMovie(newMovie))
    }
}
export default connect(null,mapDispatchToProps) (AddMovie)