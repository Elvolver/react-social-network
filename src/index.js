import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

let routesData = [
    {path: '/dialogs', component: Dialogs},
    {path: '/profile', component: Profile},
    {path: '/news', component: News},
    {path: '/music', component: Music},
    {path: '/settings', component: Settings}
]

let dialogs = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Vladimir'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Pasha'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hello world'},
]

let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 12}
]

let playListData = [
    {author: 'Beyonce', track: 'Halo', duration: '3:47', id: 0},
    {author: 'Rihanna', track: 'Umbrella', duration: '3:50', id: 1},
    {author: 'Mariah Carey', track: 'We Belong Together', duration: '4:01', id: 2},
    {author: 'Jennifer Lopez', track: 'Jenny from the Block', duration: '3:40', id: 3}
]

let bll = {
    routesData: routesData,
    dialogs: dialogs,
    messages: messages,
    posts: posts,
    playListData: playListData
}

ReactDOM.render(<App bll={bll}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
