const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 12}
    ],
    newPostText: ''
};

const updateNewPostText = (state, value) => {
    let stateCopy = {...state};

    stateCopy.newPostText = value;

    return stateCopy;
};

const addPost = (state) => {
    let stateCopy = {...state};

    let post = {
        id: 3, message: stateCopy.newPostText, likesCount: 0
    };

    stateCopy.posts = [...state.posts];
    stateCopy.posts.push(post);

    stateCopy = updateNewPostText(stateCopy,'');

    return stateCopy;
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return addPost(state);
            break;
        case UPDATE_NEW_POST_TEXT:
            return updateNewPostText(state, action.newPostText);
            break;
       default:
           break;
    }

    return state;
};

export const updateNewPostTextActionCreator = (newPostText) => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: newPostText}
};

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};

export default profileReducer;