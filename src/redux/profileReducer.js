const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 12}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    const updateNewPostText = (value) => {
        state.newPostText = value;
    };

    const addPost = () => {
        let post = {
            id: 3, message: state.newPostText, likesCount: 0
        };
        state.posts.push(post);
        updateNewPostText('');
    };

    switch (action.type) {
        case ADD_POST:
            addPost();
            break;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newPostText);
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