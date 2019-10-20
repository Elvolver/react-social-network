import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfile, updateNewPostText} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
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

export default compose(
    connect(mapStateToProps, {updateNewPostText, addPost, getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
