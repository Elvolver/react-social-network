import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    console.log('Profile props');
    console.log(props);
    return (
        <div>
            <ProfileInfo bll={props}/>
            <MyPosts  bll={props}/>
        </div>
    )
}

export default Profile;