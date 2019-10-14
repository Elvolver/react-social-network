const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 12}
    ],
    newPostText: '',
    isFetching: false,
    profile: null
};

const profileReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_POST:
                return {
                    ...state,
                    posts: [
                        ...state.posts,
                        {
                            id: 3,
                            message: state.newPostText,
                            likesCount: 0
                        }
                    ],
                    newPostText: ''
                };
            case
            UPDATE_NEW_POST_TEXT:
                return {...state, newPostText: action.newPostText};
            case
            SET_PROFILE:
                return {...state, profile: action.profile};
            default:
                break;
        }

        return state;
    }
;

export const updateNewPostText = (newPostText) => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText};
};

export const addPost = () => {
    return {type: ADD_POST};
};

export const setProfile = (profile) => {
    return {type: SET_PROFILE, profile};
};

export default profileReducer;