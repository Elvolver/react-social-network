import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {getAuthUserData, login} from "../redux/authReducer";

class LoginContainer extends React.Component {

    onSubmit = (formData) => {
        this.props.login(formData.email, formData.password, formData.rememberMe, false);
    };

    render() {
        return <Login {...this.props} onSubmit={this.onSubmit}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getAuthUserData, login})(LoginContainer);