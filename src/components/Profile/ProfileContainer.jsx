import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, sendPost, updateStatus} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    getCurrentProfileId() {
        if (this.props.match.params.userId) return this.props.match.params.userId;
        if (this.props.auth.id) return this.props.auth.id;
        this.props.history.push('/login')
        //TODO Убрать этот костыль
    }

    componentDidMount() {
        const userId = this.getCurrentProfileId();
        this.props.getProfile(userId);
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profile) {
            let newUserId = this.getCurrentProfileId();
            if (newUserId !== prevProps.profile.userId.toString()) {
                this.props.getProfile(newUserId);
                this.props.getUserStatus(newUserId)
            }
        }
    }

    render() {
        if (this.props.isAuth === false) return <Redirect to={'/login'}/>
        return <div>
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        auth: state.auth
    }
};

export default compose(
    connect(mapStateToProps, {sendPost, getProfile, getUserStatus, updateStatus}),
    withRouter
)(ProfileContainer);
