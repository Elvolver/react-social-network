import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLength10, required} from "../../../utils/validadators/validators";
import {Textarea} from "../../../common/FormsControl";

const NewPostForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength10]}
                   component={Textarea}
                   name={'newPostText'}
                   placeholder={'New post text'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
};


export default reduxForm({form: 'newPost'})(NewPostForm);
