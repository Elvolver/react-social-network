import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Provider} from 'react-redux'
import Users from "./components/Users/Users";

/*let routesData = [
    {path: '/dialogs', component: Dialogs},
    {path: '/profile', component: Profile},
    {path: '/news', component: News},
    {path: '/music', component: Music},
    {path: '/settings', component: Users}
];*/

const App = (props) => {
    return (
        <BrowserRouter>
            <Provider store={props.store}>
                <div className="App">
                    <div className='wrapper'>
                        <Header/>
                        <Navbar state={props.state.navbar}/>
                        <div className='app-wrapper-content'>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}
                            />
                            <Route path='/profile' render={() => <Profile/>}/>
                            <Route path='/users' render={() => <Users/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music state={props.state.musicPage}/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                        </div>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
