import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import DialogForm from "./DialogsForm";

const Dialogs = (props) => {

    const dialogsItems = props.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                 key={dialog.id}
                                                                 id={dialog.id}
    />);

    const messagesItems = props.messages.map(message => <Message message={message.message}
                                                                 key={message.id}
    />);

    let onSubmit = (formData) => {
        props.addMessage(formData.message)
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
                <DialogForm onSubmit={onSubmit} />
            </div>
        </div>
    )
};

export default Dialogs;