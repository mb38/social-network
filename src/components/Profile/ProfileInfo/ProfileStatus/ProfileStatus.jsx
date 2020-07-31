import React from 'react';
import classes from './ProfileStatus.module.scss';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div className={classes['container']}>
            {!this.state.editMode
                ? <div onClick={this.activateEditMode}
                       className={classes['status-title']}
                >Status: {this.props.status || 'no status'} </div>

                : <input onChange={this.onStatusChange}
                         onBlur={this.deactivateEditMode}
                         className={classes['status-text']}
                         type="text"
                         value={this.state.status}
                         />
            }
        </div>
    }
}

export default ProfileStatus;