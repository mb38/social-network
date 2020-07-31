import React from 'react';
import classes from "./ProfileInfo.module.scss";
import bgImg from "../img/bg-profile1.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

function ProfileInfo({profile, status, updateStatus}) {
    if (!profile ) {
        return <Preloader />
    }
    return (
        <div className={classes['container']}>
            <div className={classes['profile']}>
                <img src={bgImg} className={classes['profile__bg-img']} alt="bg-img" />
                <div className={classes['profile__photo']}>
                    <img src={profile.photos.large != null
                        ? profile.photos.large
                        : userPhoto} className={classes['profile__photo-img']} alt="avatar" />
                </div>
            </div>
            <div className={classes['profile-info']}>
                <div className={`${classes['profile-info__descr']} ${classes['profile-info__name']}`}>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div className={classes['profile-info__descr']}>About me: {profile.aboutMe}</div>
                <div className={classes['profile-info__descr']}>Find job: {profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;