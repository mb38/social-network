import React from 'react';
import classes from './Preloader.module.scss';

let Preloader = () => {
    return (
        <div className={classes['container']}>
            <div className={classes['lds-roller']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Preloader;