import React from "react";
import {addMessageActonCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newMessageText) => {
            let action = updateNewMessageTextActionCreator(newMessageText);
            dispatch(action);
        },
        addMessage: () => {
            let action = addMessageActonCreator();
            dispatch(action);
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;