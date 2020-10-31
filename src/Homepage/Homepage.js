
import React, { Component } from 'react';
import Videopart from '../Videolistcall/videocall';
import axios from 'axios';
import Watchpage from '../videowatch/videowatch';
import Classes from './Homepage.module.css';



class Homepage extends React.Component {
constructor(props){
  super(props)
  this.state = {
    videogrid:[]
  }
}

componentDidMount(){
  axios.get('https://5f0179f907605200169e7002.mockapi.io/Videogrid')
  .then(response =>{
    this.setState({videogrid:[...response.data]})

  })

.catch(err =>{
console.log(err);
})

}


render(){

  const Videodata =  this.state.videogrid.map((item) => {
    return(
  
    <Videopart key= {item.id} id={item.id} thumbnail={item.thumbnail}  title={item.title}/>
  
    )
  })



  return (
  
    <div className={Classes.Homepage}>
      
     
     <div className ={Classes.Grid}>
     
     
      {Videodata}

     </div>
    
    </div>
    
  );
}

}



 
export default Homepage;
