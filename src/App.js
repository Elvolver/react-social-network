import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

/*let routesData = [
    {path: '/dialogs', component: Dialogs},
    {path: '/profile', component: Profile},
    {path: '/news', component: News},
    {path: '/music', component: Music},
    {path: '/settings', component: Settings}
];*/

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='wrapper'>
                    <Header/>
                    <Navbar state={props.state.navbar}/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                        <Route path='/news' render={() => <News />}/>
                        <Route path='/music' render={() => <Music state={props.state.musicPage}/>}/>
                        <Route path='/settings' render={() => <Settings />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
