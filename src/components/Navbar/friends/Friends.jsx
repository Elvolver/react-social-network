import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friends = props.state.map(friend => <Friend state={friend}
                                                    key={friend.id}
    />);

    return (
        <div className={''}>
            <h1>Friends</h1>
            {friends}
        </div>
    )
};

export default Friends;
