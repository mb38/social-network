import React from 'react';
import profilePhoto from "../img/photo.jpg";
import classes from './MyPosts.module.scss';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validations/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => (<Post photo={profilePhoto} key={p.id} message={p.message} likesCount={p.likesCount} />));

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={classes['container']}>
            <div className={classes['add']}>
                <img src={profilePhoto} className={classes['photo-img']} alt='avatar' />
                <AddPostFormRedux onSubmit={addNewPost} />
            </div>
            {postsElements}
        </div>
    );
});

const maxLength30 = maxLengthCreator(30)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes['form-container']}>
            <Field component={Textarea}
                   name={'newPostBody'}
                   placeholder={'What`s happening?'}
                   validate={[required, maxLength30]}
            />
            <button className={classes['btn']}>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'myPostAddPostForm'})(AddPostForm)

export default MyPosts;