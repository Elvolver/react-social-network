import {UsersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 50,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUserCount: action.totalUserCount};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, totalUserCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setFollowingProgress = (followingInProgress, userId) => ({
    type: SET_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
});

export const selectUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setIsFetching(true));
        UsersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setUsers(data.items));
                dispatch(setIsFetching(false));
            })
            .catch(error => {
                dispatch(setIsFetching(false));
            });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        UsersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
                dispatch(setFollowingProgress(false, userId));
            }
        }).catch(
            dispatch(setFollowingProgress(false, userId))
        );
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        UsersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
                dispatch(setFollowingProgress(false, userId));
            }
        }).catch(
            dispatch(setFollowingProgress(false, userId))
        )
    }
};

export default usersReducer;