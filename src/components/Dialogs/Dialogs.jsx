import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";

const Dialogs = (props) => {

    const dialogsItems = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesItems = props.state.messages.map(message => <Message message={message.message}/>);

    const newMessageElement = React.createRef();

    let updateNewMessageText = () => {
        let newMessageText = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MWSSAGE-TEXT', newMessageText: newMessageText};
        props.dispatch(action);
    };

    let addMessage = () => {
        let action = {type: 'ADD-MESSAGE'};
        props.dispatch(action);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={classes.messages}>
                {messagesItems}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={updateNewMessageText} value={props.state.newMessageText}
                />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;