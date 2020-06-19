import React from 'react';
import classes from "./ProfileInfo.module.scss";
import bgImg from "../img/bg-profile1.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

function ProfileInfo(props) {
    if (!props.profile ) {
        return <Preloader />
    }
    return (
        <div className={classes['container']}>
            <div className={classes['profile']}>
                <img src={bgImg} className={classes['profile__bg-img']} alt="bg-img" />
                <div className={classes['profile__photo']}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={classes['profile__photo-img']} alt="avatar" />
                </div>
            </div>
            <div className={classes['profile-info']}>
                <div className={`${classes['profile-info__descr']} ${classes['profile-info__name']}`}>{props.profile.fullName}</div>
                <div className={classes['profile-info__descr']}>About me: {props.profile.aboutMe}</div>
                <div className={classes['profile-info__descr']}>Find job: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;