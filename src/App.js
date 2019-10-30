import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect, Provider} from 'react-redux'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./Login/LoginContainer";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {return <Preloader/>}
        else {
            return (
                <BrowserRouter>
                    <Provider store={this.props.store}>
                        <div className="App">
                            <div className='wrapper'>
                                <HeaderContainer/>
                                <Navbar state={this.props.state.navbar}/>
                                <div className='app-wrapper-content'>
                                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                    <Route path='/users' render={() => <UsersContainer/>}/>
                                    <Route path='/news' render={() => <News/>}/>
                                    <Route path='/music' render={() => <Music state={this.props.state.musicPage}/>}/>
                                    <Route path='/settings' render={() => <Settings/>}/>
                                    <Route path='/login' render={() => <LoginContainer/>}/>
                                </div>
                            </div>
                        </div>
                    </Provider>
                </BrowserRouter>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    connect(mapStateToProps, {initializeApp}),
)(App);
