import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    setTotalUsersCountActionCreator,
    setCurrentPageActionCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsersCount();
        this.getUsers();
    }

    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        }).catch(error => {
        });
    };

    getUsersCount = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setTotalUsersCount(response.data.totalCount)
        }).catch(error => {
        });
    };

    calcPageCount = () => {
        return Math.ceil(this.props.totalUserCount / this.props.pageSize);
    };

    onPageChanged = (p) => {
        this.setCurrentPage(p);
        this.getUsers();
    };

    setCurrentPage = (p) => {
        this.props.setCurrentPage(p);
    };

    render() {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      calcPageCount={this.calcPageCount}
                      onPageChanged={this.onPageChanged}
        />
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setTotalUsersCount: (totalUsersCount) => {
            const action = setTotalUsersCountActionCreator(totalUsersCount);
            dispatch(action)
        },
        setCurrentPage: (currentPage) => {
            const action = setCurrentPageActionCreator(currentPage);
            dispatch(action)
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
