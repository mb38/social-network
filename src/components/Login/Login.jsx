import React from 'react';
import classes from './Login.module.scss';
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



function Login(props) {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div className={classes['container']}>
        <h2 className={classes['title']}>Authorization</h2>
        <LoginReduxForm onSubmit={onSubmit} />
        <div className={classes['test']}>
            <div className={classes['test-title']}>Free user</div>
            <div>Email: free@samuraijs.com</div>
            <div>Password: free</div>
        </div>
    </div>
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect( mapStateToProps, {login})(Login);