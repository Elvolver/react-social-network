import React from 'react';
import {connect} from "react-redux";
import {follow, selectUsers, unfollow} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.calcPageCount();
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   calcPageCount={this.calcPageCount}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }

    calcPageCount = () => {
        return Math.ceil(this.props.totalUserCount / this.props.pageSize);
    };

}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers: selectUsers})
)(UsersContainer);
