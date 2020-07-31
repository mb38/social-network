import React, {Suspense} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import classes from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <Row>
                <Route path='/' render={() => <HeaderContainer/>}/>
                <Col offset={1} lg={3}>
                    <Route path='/' render={() => <Navbar/>}/>
                    <Route path='/' render={() => <SidebarContainer/>}/>
                </Col>
                <Col offset={1} lg={15}>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/profile/:userId?' render={() =>  {
                        return <Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainer/>
                        </Suspense>
                    }}/>
                    <Route path='/dialogs' render={() => {
                        return <Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer/>
                        </Suspense>
                    }}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const MainApp = (props) => {
    return <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
    </BrowserRouter>
}

export default MainApp;
