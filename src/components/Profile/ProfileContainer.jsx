import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, sendPost, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    setDefaultIdIfNotExists(userId) {
        return (!userId) ? 1849 : userId;
    }
    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = this.setDefaultIdIfNotExists(userId);
        //TODO Убрать этот костыль
        this.props.getProfile(userId);
        this.props.getUserStatus(userId)

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profile) {

            let newUserId = this.props.match.params.userId;
            newUserId = this.setDefaultIdIfNotExists(newUserId);
            //TODO Убрать этот костыль
            if (newUserId !== prevProps.profile.userId.toString()) {
                this.props.getProfile(newUserId);
                this.props.getUserStatus(newUserId)
            }
        }
    }

    render() {
        return <div>
            <Profile profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps, {sendPost, getProfile, getUserStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);
