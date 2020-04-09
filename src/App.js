import React from 'react';
import './App.css';
import ListMovie from './component/listMovie/ListMovie';
// import AddMovie from './component/addMovie/AddMovie'
import AddMovieSalwa from './component/addMovie/AddMovieSalwa'
import Rating from './component/Rating'
import Search from './component/Search/Search';
import EditMovie from './component/editMovie/EditMovie'

function App() {

  return (
    <div>
    <Search />
   
    {/* <AddMovie/> */}
    <AddMovieSalwa/>

    <ListMovie />
    <Rating />
    </div>
  );
}

export default App;
