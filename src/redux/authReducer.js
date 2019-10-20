import {AuthAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) => {
    return {type: SET_USER_DATA, data: {id, email, login}};
};

export const getAuthUserData = () => {
    return (dispatch) => {
        AuthAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = {...data.data};
                    dispatch(setAuthUserData(id, login, email));
                }
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export default authReducer;