import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 12}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dmitry'},
                {id: 2, name: 'Vladimir'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Pasha'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hello world'},
            ],
            newMessageText: 'asd'
        },
        musicPage: {
            playListData: [
                {author: 'Beyonce', track: 'Halo', duration: '3:47', id: 0},
                {author: 'Rihanna', track: 'Umbrella', duration: '3:50', id: 1},
                {author: 'Mariah Carey', track: 'We Belong Together', duration: '4:01', id: 2},
                {author: 'Jennifer Lopez', track: 'Jenny from the Block', duration: '3:40', id: 3}
            ]
        },
        navbar: {
            friends: [
                {
                    id: 1,
                    name: 'Dmitry',
                    avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
                },
                {
                    id: 2,
                    name: 'Vladimir',
                    avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
                },
                {
                    id: 3,
                    name: 'Sasha',
                    avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSybscriber = observer;
    },
    _callSybscriber() {
        console.log('state changed');
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSybscriber();
    }
};

window.store = store;
export default store;