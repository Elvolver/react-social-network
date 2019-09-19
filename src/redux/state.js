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
    _addPost() {
        let post = {
            id: 3, message: this._state.profilePage.newPostText, likesCount: 0
        };
        this._state.profilePage.posts.push(post);
        this._updateNewPostText('');
    },
    _updateNewPostText(value) {
        this._state.profilePage.newPostText = value;
        this._callSybscriber(this._state);
    },
    _addMessage() {
        let message = {
            id: 4, message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(message);
        this._updateNewMessageText('');
    },
    _updateNewMessageText(value) {
        this._state.dialogsPage.newMessageText = value;
        this._callSybscriber(this._state);
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost();
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._updateNewPostText(action.newPostText);
                break;
            case 'ADD-MESSAGE':
                this._addMessage();
                break;
            case 'UPDATE-NEW-MWSSAGE-TEXT':
                this._updateNewMessageText(action.newMessageText);
                break;
            default:
                console.log('not case for dispatch action.type');
        }
    }
};
window.store = store;
export default store;