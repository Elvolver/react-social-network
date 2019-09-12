import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            Profile
            <img
                src='http://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/public/field/field_image_main/Picture%20this.jpg?itok=1ZJwGrhE'/>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;