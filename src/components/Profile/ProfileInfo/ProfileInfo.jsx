import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            Profile
            <img
                src='https://cheesecake.articleassets.meaww.com/105271/uploads/a88a5100-67fb-11e9-be86-e90fd24c620e_800_420.jpeg'

            alt='img'/>
            <div>
                ava + description
            </div>
            <div className={styles.profile}>

                <img src={props.profile.photos.large} alt=""/>
            </div>
        </div>
    )
};

export default ProfileInfo;