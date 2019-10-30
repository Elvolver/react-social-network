import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => {
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth}};
};

export const getAuthUserData = () => dispatch => {
    return AuthAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = {...data.data};
                dispatch(setAuthUserData(id, login, email, true));
            }
        })
        .catch(error => {
            console.log(error)
        });
};

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    AuthAPI.login(email, password, rememberMe, captcha)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                console.warn(data.messages[0]);
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
            }
        })
        .catch(error => {
            console.log(error)
        });
};

export const logout = () => (dispatch) => {
    AuthAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
        .catch(error => {
            console.log(error)
        });
};

export default authReducer;