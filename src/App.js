
import './App.css';
import React, { Component } from 'react';
import Videopart from './Videolistcall/videocall';
import axios from 'axios';
import Watchpage from './videowatch/videowatch';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Notfound from './notfound/notfound'
import Topbar from './Topbar/Topbar';
import Login from './Login/Login';
class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
      userStatus: false,
  }
}

handleLoginStatus=()=>{
  this.setState({
    userStatus:true
  })
}
handleLogoutStatus=()=>{
  this.setState({
    userStatus:false
  })
}
  render() {
    return (  
      
      <BrowserRouter>
       <Topbar userStatus={this.state.userStatus} handleLogoutStatus={this.handleLogoutStatus}/>  
        <div className="App">
       
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/watch/:id' component={Watchpage } />
          <Route path='/login' render={(props)=>
            this.state.userStatus ? <Redirect to='/'/>:<Login handleLoginStatus={this.handleLoginStatus} {...props}/>
          }/>
           
          <Route component={Notfound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}




export default App;
