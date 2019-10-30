import React from "react";
import Post from "./Post/Post";
import NewReduxPostForm from "./Post/NewPostForm";

const MyPosts = (props) => {

    const postsItems = props.posts.map(post => <Post id={post.id}
                                                     message={post.message}
                                                     likesCount={post.likesCount}
                                                     key={post.id}
    />);

    const onSubmit = (formData) => {
        props.sendPost(formData.newPostText);
    };

    return <div className={''}>
        <h3>My posts</h3>
        <NewReduxPostForm onSubmit={onSubmit}/>
        <div className={''}>
            {postsItems}
        </div>
    </div>

};

export default MyPosts;