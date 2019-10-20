import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfile, updateNewPostText} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={"/login"} />
        }

        return <div>
            <Profile profile={this.props.profile} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    updateNewPostText,
    addPost,
    getProfile
})(WithRouterProfileContainer);