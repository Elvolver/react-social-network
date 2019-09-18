import {rerenderEntireTree} from "../render";

let state = {
    profilePage : {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 12}
        ],
        inputValue: ""
    },
    dialogsPage:{
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
        ]
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
            {id: 1, name: 'Dmitry', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'},
            {id: 2, name: 'Vladimir', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'},
            {id: 3, name: 'Sasha', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'}
        ]
    }
};

export let addPost = (postMessage) => {
    let post = {
        id: 3, message: postMessage, likesCount: 0
    }
    state.profilePage.posts.push(post);
    rerenderEntireTree(state);
}

export let exportinputValue = (value) => {
    state.profilePage.inputValue = value;
    rerenderEntireTree(state);
}

export default state;