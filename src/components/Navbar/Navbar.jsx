import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.scss';

function Navbar() {
    return (
        <div className={classes['container']}>
            <div className={classes['item']}>
                <NavLink className={classes['link']} activeClassName={classes['active']} to="/profile">Profile</NavLink>
            </div>
            <div className={classes['item']}>
                <NavLink className={classes['link']} activeClassName={classes['active']} to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes['item']}>
                <NavLink className={classes['link']} activeClassName={classes['active']} to="/users">Users</NavLink>
            </div>
            <div className={classes['item']}>
                <NavLink className={classes['link']} activeClassName={classes['active']} to="/news">News</NavLink>
            </div>
            <div className={classes['item']}>
                <NavLink className={classes['link']} activeClassName={classes['active']} to="/music">Music</NavLink>
            </div>
            <div className={`${classes['item']} ${classes['item-settings']}`}>
                <NavLink className={classes['link']} activeClassName={classes['active']} to="/settings">Settings</NavLink>
            </div>
        </div>
    );
}

export default Navbar;