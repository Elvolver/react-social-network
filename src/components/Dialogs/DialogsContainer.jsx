import React from "react";
import {addMessageActonCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const dialogsPageState = props.store.getState().dialogsPage;

    const dialogs = dialogsPageState.dialogs;
    const messages = dialogsPageState.messages;
    const newMessageText = dialogsPageState.newMessageText;

    let updateNewMessageText = (newMessageText) => {
        let action = updateNewMessageTextActionCreator(newMessageText);
        props.store.dispatch(action);
    };

    let addMessage = () => {
        let action = addMessageActonCreator();
        props.store.dispatch(action);
    };
debugger;
    return <Dialogs addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                    dialogs={dialogs}
                    messages={messages}
                    newMessageText={newMessageText}
    />
};

export default DialogsContainer;