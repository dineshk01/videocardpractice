import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Classes from './Login.module.css';
import axios from 'axios';
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { Loginbtn: [], }
    }
    render() {
        const Refresh = (e) => {
            e.preventDefault()

            const datafeed = {
                username: e.target.username.value,
                password: e.target.password.value
            }

            axios.post("https://5f0179f907605200169e7002.mockapi.io/Login", datafeed)
                .then(response => {
                    alert("Login Sucess")
                    this.props.handleLoginStatus(); 
                    this.props.history.push('/')
                })

                .catch(err => {
                    console.log(err);
                })
        }


        return (

            <div className={Classes.BtnDiv}>
                <form onSubmit={Refresh} >

                    <input name="username" type="text" placeholder="Usernname" required />
                    <input name="password" type="password" placeholder="Password" required />
                    <input type="Submit" value="Login" />

                </form>
                {/* <button onClick={this.props.handleLoginStatus} className={Classes.Btn}>Login</button> */}
            </div>
        )
    }
}

export default Login;