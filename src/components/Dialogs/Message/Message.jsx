import React from 'react';
import classes from "./Message.module.scss";

function Messages(props) {
    return (
        <div className={classes['container']}>
            <div className={classes['message']}>{props.message}</div>
        </div>
    );
}

export default Messages;