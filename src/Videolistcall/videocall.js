import React from 'react';
import Classes from './videoCall.module.css';
import {Link} from 'react-router-dom';
const videopart = (props) => {
    
    return (
        <Link className={Classes.GridMain} to={`/watch/${props.id}`}>
        <div>
            <img className={Classes.Image} src={props.thumbnail} alt={props.title} />
            <h2 className={Classes.Title}>{props.title}</h2>
        </div>
        </Link>
    )

}

export default videopart;