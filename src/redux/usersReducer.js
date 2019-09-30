const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {
                city: 'Vologda',
                country: 'Russia'
            }
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },
        {
            id: 3,
            followed: false,
            fullName: 'Ivan',
            status: 'I am not a boss',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
};

export const followActionCreator = (newMessageText) => {
    return {type: FOLLOW};
};

export const unfollowActionCreator = () => {
    return {type: UNFOLLOW};
};

export default usersReducer;