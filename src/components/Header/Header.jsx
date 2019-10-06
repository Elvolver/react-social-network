import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
    <div className={classes.header}>
        <div className={classes.headerLogo}>
            <img src='https://www.freepnglogos.com/uploads/batman-logo-images-pictures-10.png'/>
        </div>
        <div className={classes.pageTitle}>Batman forever</div>
    </div>
    )
}

export default Header;