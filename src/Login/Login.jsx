import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../components/utils/validadators/validators";
import {Input} from "../components/common/FormsControl";
import {Redirect} from "react-router-dom";
import styles from "./Login.module.css"

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                   name={'email'}
                   type="text"
                   placeholder={"email"}
                   validate={[required]}
            />
            email
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

        {props.error && <div className={styles.summaryError}>{props.error}</div>}

        <div>
            <button>Login</button>
        </div>

    </form>
};

const ReduxLoginFrom = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h3>Login</h3>
        <ReduxLoginFrom onSubmit={props.onSubmit}/>
    </div>
};
export default Login;