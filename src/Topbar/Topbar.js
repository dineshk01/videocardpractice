import React, { Component } from 'react';
import Classes from './Topbar.module.css';
import {Link} from 'react-router-dom';
class Topbar extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            Topbarstore:[],
        }
    }
render(){
    console.log(this.props.userStatus)
    return(
        <div className={Classes.TopDiv}>
            <p ><Link className={Classes.Menu} to="/">Home</Link></p>
            <p >
                {
                    this.props.userStatus ? <button onClick={this.props.handleLogoutStatus} className={Classes.Menu}>Logout</button> :<Link className={Classes.Menu} to="/login">Login</Link>
                }
            </p>
        </div>
    )
}
}
export default Topbar;