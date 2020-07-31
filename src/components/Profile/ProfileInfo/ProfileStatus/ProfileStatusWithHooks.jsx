import React, {useEffect, useState} from 'react';
import classes from './ProfileStatus.module.scss';

function ProfileStatusWithHooks(props) {

    let [editMode, setEditMode]  = useState(false);
    let [status, setStatus]  = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={classes['container']}>
        { !editMode
        ? <div onClick={activateEditMode}
             className={classes['status-title']}
            >Status: {status || 'no status'} </div>

        : <input onChange={onStatusChange}
               onBlur={deactivateEditMode}
               className={classes['status-text']}
               type="text"
               value={status}
        />
        }
    </div>
}

export default ProfileStatusWithHooks;