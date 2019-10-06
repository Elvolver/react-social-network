const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


const initialState = {
    users: [
        /*{
            id: 1,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
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
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
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
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
            followed: false,
            fullName: 'Ivan',
            status: 'I am not a boss',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        }*/
    ]
};



const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};

export const followActionCreator = (userId) => {
    return {type: FOLLOW, userId};
};

export const unfollowActionCreator = (userId) => {
    return {type: UNFOLLOW, userId};
};

export const setUsersActionCreator = (users) => {
    return {type: SET_USERS, users}
};

export default usersReducer;