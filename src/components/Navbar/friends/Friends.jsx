import React from "react";
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friends = props.state.map(friend => <Friend state={friend}/>);

    return (
        <div className={classes.friends}>
            <h1>Friends</h1>
            {friends}
        </div>
    )
}

export default Friends;
