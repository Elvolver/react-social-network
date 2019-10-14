import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, setProfile, updateNewPostText} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {ProfileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        ProfileAPI.getProfile(userId)
            .then(data => {
                this.props.setProfile(data);
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return <div>
            <Profile profile={this.props.profile}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    updateNewPostText,
    addPost,
    setProfile
})(WithRouterProfileContainer);