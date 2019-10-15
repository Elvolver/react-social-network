import React from 'react';
import Header from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AuthAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        AuthAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = {...data.data};
                    this.props.setAuthUserData(id, login, email);
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);