import {ProfileAPI} from "../api/api";

const SEND_POST = 'SEND_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';


const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 12}
    ],
    isFetching: false,
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

        switch (action.type) {
            case SEND_POST:
                return {
                    ...state,
                    posts: [
                        ...state.posts,
                        {
                            id: 3,
                            message: action.newPostText,
                            likesCount: 0
                        }
                    ],
                    newPostText: ''
                };
            case SET_PROFILE:
                return {...state, profile: action.profile};
            case SET_STATUS:
                return {...state, status: action.status};
            default:
                break;
        }

        return state;
    }
;

export const sendPost = (newPostText) => {
    return {type: SEND_POST, newPostText};
};

export const setProfile = (profile) => {
    return {type: SET_PROFILE, profile};
};

export const setStatus = (status) => {
    return {type: SET_STATUS, status};
};

export const getProfile = (userId) => (dispatch) => {
    ProfileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data));
        })
        .catch(error => {
            console.log(error)
        });
};

export const getUserStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(status => {
            dispatch(setStatus(status));
        })
        .catch(error => {
            console.log(error)
        });
};

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.setStatus(status)
        .then(response => {
            dispatch(setStatus(status));
        })
        .catch(error => {
            console.log(error)
        });
};

export default profileReducer;