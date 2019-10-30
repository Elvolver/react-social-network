const initialState = {
    friends: [
        {
            id: 1849,
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
};

const navbarReducer = (state = initialState) => {
    return state;
};

export default navbarReducer;