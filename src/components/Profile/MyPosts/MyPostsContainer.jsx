import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

   const updateNewPostText = (newPostText) => {
        let action = updateNewPostTextActionCreator(newPostText);
        props.store.dispatch(action);
    };

    const addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    return <MyPosts updateNewPostText={updateNewPostText}
                    addPost={addPost}
                    newPostText={props.store.getState().profilePage.newPostText}
                    posts={props.store.getState().profilePage.posts}
    />
};

export default MyPostsContainer;