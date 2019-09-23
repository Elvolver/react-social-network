import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsItems = props.posts.map(post => <Post id={post.id}
                                                     message={post.message}
                                                     likesCount={post.likesCount}
    />);

    const newPostElement = React.createRef();

    const updateNewPostText = () => {
        let newPostText = newPostElement.current.value;
        props.updateNewPostText(newPostText)
    };

    const addPost = () => {
        props.addPost();
    };

    return (
        <div className={classes.postsBlock}>
            {console.log(props)}
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={updateNewPostText} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>
    )
};

export default MyPosts;