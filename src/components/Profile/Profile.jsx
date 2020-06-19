import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer profile={props.profile}/>
        </div>
    );
}

export default Profile;