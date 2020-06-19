import React from 'react';
import classes from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes['container']}>
            <NavLink className={classes['dialog']} to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;