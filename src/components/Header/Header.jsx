import React from 'react';
import classes from './Header.module.scss';
import {NavLink} from "react-router-dom";
import Logo from '../../assets/images/logo192.png';

function Header(props) {
    return (
        <div className={classes['container']}>
            <img src={Logo} className={classes['logo']} alt='logo' />
            <div className={classes['login']}>
                { props.isAuth ? props.login :
                    <NavLink to={'/login'} className={classes['login-item']}>Login</NavLink>
                }
            </div>
        </div>
    );
}

export default Header;