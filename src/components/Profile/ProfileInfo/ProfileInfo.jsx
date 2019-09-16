import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            Profile
            <img
                src='http://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/public/field/field_image_main/Picture%20this.jpg?itok=1ZJwGrhE'/>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;