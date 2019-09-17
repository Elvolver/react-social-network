import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";

const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesItems = props.state.messages.map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                <textarea ref={newMessageElement} name="message" id="" cols="30" rows="10"></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;