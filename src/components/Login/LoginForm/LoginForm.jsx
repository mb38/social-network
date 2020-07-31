import React from 'react';
import classes from './LoginForm.module.scss';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validations/validators";

function LoginForm(props) {
    return <div className={classes['container']}>
        <form onSubmit={props.handleSubmit} className={classes['container-form']}>
            <div className={classes['container-form__item']}>
                <Field type="text"
                       placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div className={classes['container-form__item']}>
                <Field type="password"
                       placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div className={classes['container-form__item']}>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={'input'}
                       id={'checkbox'}
                       className={classes['form-checkbox']}
                />
                <label htmlFor="checkbox">remember me</label>
            </div>
            <div className={classes['form-error']}>{props.error}</div>
            <div className={classes['container-form__item']}>
                <button className={classes['form-btn']}>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

export default LoginReduxForm;