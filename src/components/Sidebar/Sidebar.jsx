import React from 'react';
import classes from './Sidebar.module.scss';
import Friends from './Friends/Friends';
import sidebarReducer from "../../redux/sidebar-reducer";


function Sidebar(props) {
    let friendsElements = sidebarReducer().friends.map(f => <Friends name={f.name} key={f.id}/>);
    return (
        <div className={classes['container']}>
            <h2 className={classes['title']}>Friends</h2>
            {friendsElements}
        </div>
    )
}

export default Sidebar;