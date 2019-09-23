import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";

const Dialogs = (props) => {

    const dialogsItems = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesItems = props.messages.map(message => <Message message={message.message}/>);

    const newMessageElement = React.createRef();

    let updateNewMessageText = () => {
        let newMessageText = newMessageElement.current.value;
        props.updateNewMessageText(newMessageText);
    };

    let addMessage = () => {
        props.addMessage()
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
                <textarea ref={newMessageElement}
                          onChange={updateNewMessageText}
                          value={props.newMessageText}
                />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;