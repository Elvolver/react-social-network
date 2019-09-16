import React from "react";
import classes from './Track.module.css';
import {NavLink} from "react-router-dom";

const Track = (props) => {
    return (
        <div className={classes.track}>
            <NavLink to={`/music/${props.id}`} activeClassName={classes.active}>{props.author} - {props.track} ({props.duration})</NavLink>
        </div>
    )
}

export default Track;