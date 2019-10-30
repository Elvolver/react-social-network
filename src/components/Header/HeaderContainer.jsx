import React from 'react';
import Header from "./Header";
import {logout} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    logout = () => {
        this.props.logout();
    };

    render() {
        return <Header {...this.props} logout={this.logout}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer);