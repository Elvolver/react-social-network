import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    console.log ('MyPosts Props')
    console.log(props)
    let postsItems = props.bll.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            {console.log(props)}
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button onClick={ () => alert('Fuck you!')}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>
    )
}

export default MyPosts;