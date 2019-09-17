import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsItems = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.postsBlock}>
            {console.log(props)}
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>
    )
}

export default MyPosts;