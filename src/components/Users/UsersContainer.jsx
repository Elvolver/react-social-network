import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFollowingProgress,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {UsersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.getUsersCount();
        this.updateUsers(this.props.pageNumber);
    }

    getUsersCount = () => {
        this.props.setIsFetching(true);
        UsersAPI.getUsers(this.props.pageSize, this.props.pageSize)
            .then(data => {
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setIsFetching(false);
            }).catch(error => {
                console.log(error)
        });
    };

    calcPageCount = () => {
        return Math.ceil(this.props.totalUserCount / this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        if (pageNumber !== this.props.currentPage) {
            this.setCurrentPage(pageNumber);
            this.props.setIsFetching(true);
            this.updateUsers(pageNumber);
        }
    };

    updateUsers(pageNumber) {
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items)
            })
            .catch(error => {
                console.log(error)
            });
    };

    setCurrentPage = (p) => {
        this.props.setCurrentPage(p);
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
                   setFollowingProgress={this.props.setFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    setFollowingProgress
})(UsersContainer);
