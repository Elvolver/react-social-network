const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Vladimir'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Pasha'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello world'},
    ],
    newMessageText: ''
};

const updateNewMessageText = (state, value) => {
    return {
        ...state,
        newMessageText: value
    };
};

const addMessage = (state) => {

    return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {
            id: 4, message: state.newMessageText
        }]
    };
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return addMessage(state);
        case UPDATE_NEW_MESSAGE_TEXT:
            return updateNewMessageText(state, action.newMessageText);
        default:
            return state;
    }
};

export const updateNewMessageTextActionCreator = (newMessageText) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText};
};

export const addMessageActonCreator = () => {
    return {type: ADD_MESSAGE};
};

export default dialogsReducer;