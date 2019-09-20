const initialState = {
    playListData: [
        {author: 'Beyonce', track: 'Halo', duration: '3:47', id: 0},
        {author: 'Rihanna', track: 'Umbrella', duration: '3:50', id: 1},
        {author: 'Mariah Carey', track: 'We Belong Together', duration: '4:01', id: 2},
        {author: 'Jennifer Lopez', track: 'Jenny from the Block', duration: '3:40', id: 3}
    ]
};

const musicReducer = (state = initialState, action) => {
    return state;
};

export default musicReducer;