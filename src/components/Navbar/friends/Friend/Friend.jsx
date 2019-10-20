import React from "react";
import classes from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <NavLink to={`/profile/${props.state.id}`}>
        <div className={classes.friend}>
            <div className={classes.avatar}>

                <img src={props.state.avatar} alt={props.state.name}/>
            </div>
            <div className={classes.name}>
                {props.state.name}
            </div>
        </div>
        </NavLink>
    )
};

export default Friend;
