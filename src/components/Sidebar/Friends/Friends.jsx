import React from 'react';
import classes from './Friends.module.scss';

function Friends(props) {
    return (
        <div className={classes['container']}>
            <img src="" className={classes['photo-img']} alt='avatar' />
            <div className={classes['friend-name']}>{props.name}</div>
        </div>
    );
}

export default Friends;