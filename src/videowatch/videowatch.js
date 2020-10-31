import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import Axios from 'axios';

class watchpage extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            gridstore:[],

        }
    }
    componentDidMount(){
        const selectedid = this.props.match.params.id;
        Axios.get(`https://5ee248998b27f3001609487b.mockapi.io/video/${selectedid}`)
        .then(response=>{
            console.log(response.data)
            this.setState({gridstore:{...response.data}})
        })

        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        console.log(this.state.gridstore.vimeoId)
        return(
            <div>
               <Link to='/'>Go Back To HomePage</Link> 
                <h1>Video for id{this.props.match.params.id}</h1>
                <iframe width="400px"  src={`https://player.vimeo.com/video/${this.state.gridstore.vimeoId}`}/>
                <h3>{this.state.gridstore.title}</h3>
                <p>{this.state.gridstore.description}</p>
            </div>
        )
    }
}
    
export default watchpage;