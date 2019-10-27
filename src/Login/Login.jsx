import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../components/utils/validadators/validators";
import {Input} from "../components/common/FormsControl";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                   name={'login'}
                   type="text"
                   placeholder={"login"}
                   validate={[required]}
            />
            login
        </div>
        <div>
            <Field component={Input}
                   name={'password'}
                   type="password"
                   placeholder={"password"}
                   validate={[required]}
            />
            password
        </div>
        <div>
            <Field component={Input}
                   name={'rememberMe'}
                   type="checkbox"
            /> remember me
        </div>

        <div>
            <button>Login</button>
        </div>

    </form>
};

const ReduxLoginFrom = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h3>Login</h3>
        <ReduxLoginFrom onSubmit={onSubmit}/>
    </div>
}
export default Login;