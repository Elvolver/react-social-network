import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Provider} from 'react-redux'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <Provider store={props.store}>
                <div className="App">
                    <div className='wrapper'>
                        <HeaderContainer/>
                        <Navbar state={props.state.navbar}/>
                        <div className='app-wrapper-content'>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}
                            />
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music state={props.state.musicPage}/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                        </div>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
