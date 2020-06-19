import React from 'react';
import classes from './Post.module.scss';

function Post(props) {
    return (
        <div className={classes['container']}>
            <img src={props.photo} className={classes['photo']} alt='avatar' />
            <div className={classes['text']}>{ props.message }</div>
            <button className={classes['like']}>Like</button>{props.likesCount}
        </div>
    );
}

export default Post;