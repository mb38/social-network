import React from "react";
import classes from './FormsControls.module.scss';

export const Textarea = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error;
    return (
        <div className={classes['form-container']}>
            <textarea {...input} {...props} className={classes['form-textarea'] + ' ' + (hasError
                ? classes['error']
                : '') }
            />
            { hasError && <span className={classes['form-error']}>{error}</span>}
        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error;
    return (
        <div className={classes['form-container__input']}>
            <input {...input} {...props} className={classes['form-input'] + ' ' + (hasError
                ? classes['error']
                : '') }
            />
            { hasError && <span className={classes['form-error']}>{error}</span>}
        </div>
    )
}
