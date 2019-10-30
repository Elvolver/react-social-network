import classes from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.headerLogo}>
                <img
                    src='https://www.freepnglogos.com/uploads/batman-logo-images-pictures-10.png'
                    alt=''
                />
            </div>
            <div className={classes.pageTitle}>Batman forever</div>
            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <button onClick={props.logout}> {props.login} </button>


                    : <NavLink to={'/login'}>
                    Login
                    </NavLink>
                }
            </div>
        </div>
    )
};

export default Header;