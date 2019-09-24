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
    newMessageText: 'asd'
};

const updateNewMessageText = (state, value) => {
    let stateCopy = {...state};

    stateCopy.newMessageText = value;

    return stateCopy;
};

const addMessage = (state) => {
    let stateCopy = {...state};

    let message = {
        id: 4, message: stateCopy.newMessageText
    };

    stateCopy.messages = [...state.messages];
    stateCopy.messages.push(message);

    stateCopy = updateNewMessageText(stateCopy,'');

    return stateCopy;
};



const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return addMessage(state);
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            return updateNewMessageText(state, action.newMessageText);
            break;
        default:
            break;
    }

    return state;
};

export const updateNewMessageTextActionCreator = (newMessageText) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText};
};

export const addMessageActonCreator = () => {
    return {type: ADD_MESSAGE};
};

export default dialogsReducer;