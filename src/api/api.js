import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    data: null,
    headers: {
        'API-KEY': 'e2d45044-b12d-4494-bd7b-259f01f5c0ce'
    }
});

export const UsersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    unfollow: (userId) => {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    follow: (UserId) => {
        return instance
            .post(`follow/${UserId}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    }
};

export const ProfileAPI = {
    getProfile: (userId) => {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    }
};
