import React from "react"
import {Field, reduxForm} from "redux-form";
import {maxLength255, required} from "../utils/validadators/validators";
import {Textarea} from "../common/FormsControl";

const DialogForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'message'}
                   component={Textarea}
                   validate={[required, maxLength255]}
            />
            <button >Add message</button>
        </form>
    )
}

export default reduxForm({form: 'dialogMessage'})(DialogForm);