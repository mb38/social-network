import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";



let mapStateToProps = (state) => {
    return {
        sidebarPage: state.sidebarPage,
    }
}
const DialogsContainer = connect(mapStateToProps)(Sidebar);
export default DialogsContainer;