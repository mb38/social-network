import React from 'react';
import classes from './Users.module.scss';
import {Col, Row} from "antd";
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    };

    return <div className={classes['container']}>
        {pages.map(p => {
            return <span className={`${classes['select-page']} ${props.currentPage === p && classes['selected']}`}
                         onClick={() => { props.onPageChanged(p) }}>{p}</span>
        })}
        {
            props.users.map(u => <div className={classes['container-item']} key={u.id}>
                <Row>
                    <Col lg={4}>
                        <div className={classes['container-photo']}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes['user-photo']}/>
                            </NavLink>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    const id = u.id;
                                    props.toggleFollowingProgress(true, id);
                                    usersAPI.delFollow(id).then(data => {
                                        if (data.resultCode == 0) {
                                            props.unfollow(id);
                                        }
                                        props.toggleFollowingProgress(false, id);
                                    });

                                }} className={classes['btn-un']}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    const id = u.id;
                                    props.toggleFollowingProgress(true, id);
                                    usersAPI.postFollow(id).then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(id);
                                        }
                                        props.toggleFollowingProgress(false, id);
                                    });
                                }} className={classes['btn']}>Follow</button>
                            };
                        </div>
                    </Col>
                    <Col lg={20}>
                        <div className={classes['container-info']}>
                            <div className={classes['info']}>
                                <div className={classes['info-user']}>{u.name}</div>
                                <div className={classes['info-status']}>'{u.status}'</div>
                            </div>
                            <div className={classes['info']}>
                                <div className={classes['info-descr']}>{"u.location.country"}</div>
                                <div className={classes['info-descr']}>{"u.location.city"}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>)
        }
    </div>
}

export default Users;