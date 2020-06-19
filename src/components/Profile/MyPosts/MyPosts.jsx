import React from 'react';
import profilePhoto from "../img/photo.jpg";
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

function MyPosts(props) {
    let postsElements = props.posts.map(p => (<Post photo={profilePhoto} key={p.id} message={p.message} likesCount={p.likesCount} />));
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes['container']}>
            <div className={classes['add']}>
                <img src={profilePhoto} className={classes['photo-img']} alt='avatar' />
                <textarea ref={newPostElement}
                          className={classes['text']}
                          placeholder='What`s happening?'
                          onChange={onPostChange}
                          value={props.newPostText}/>
                <button onClick={onAddPost}
                        className={classes['btn']}>Add post</button>
            </div>

            {postsElements}
        </div>
    );
}

export default MyPosts;