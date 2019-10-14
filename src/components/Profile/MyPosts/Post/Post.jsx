import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://i.pinimg.com/originals/46/00/57/46005760e0544bcadaaee9b92387e8b8.png'
                alt=''
            />

            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
};

export default Post;