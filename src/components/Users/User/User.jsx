import React from 'react';
import classes from './User.module.scss';
import {Col, Row} from "antd";
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={classes['container-item']}>
            <Row>
                <Col lg={4}>
                    <div className={classes['container-photo']}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={classes['user-photo']}/>
                        </NavLink>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);

                            }} className={classes['btn-un']}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }} className={classes['btn']}>Follow</button>
                        };
                    </div>
                </Col>
                <Col offset={1} lg={19}>
                    <div className={classes['container-info']}>
                        <div className={classes['info']}>
                            <div className={classes['info-user']}>{user.name}</div>
                            <div className={classes['info-status']}>'{user.status}'</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default User;