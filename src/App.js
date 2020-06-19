import React from 'react';
import {Route} from 'react-router-dom';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css'
import classes from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
            <Row>
                <HeaderContainer />
                <Col offset={2} lg={2}>
                    <Navbar />
                    <Route path='/' render={() => <SidebarContainer />}/>
                </Col>
                <Col offset={1} lg={15}>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </Col>
            </Row>
);
}

export default App;
