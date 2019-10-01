import React from 'react';
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            const action = followActionCreator(userId);
            dispatch(action);
        },
        unFollow: (userId) => {
            const action = unfollowActionCreator(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            const action = setUsersActionCreator(users);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
