import * as axios from "axios";

const apiKey = 'e2d45044-b12d-4494-bd7b-259f01f5c0ce';
const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    data: null,
    headers: {
        'API-KEY': apiKey
    }
});

export const UsersAPI = {
    getUsers: (currentPage, pageSize) => instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return error;
        }),

    unfollow: (userId) => instance
        .delete(`follow/${userId}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
            return error;
        }),

    follow: (UserId) => instance
        .post(`follow/${UserId}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const ProfileAPI = {
    getProfile: (userId) => instance
        .get(`profile/${userId}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        }),
    getStatus: (userId) => instance
        .get(`profile/status/${userId}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        }),
    setStatus: (status) => instance
        .put(`profile/status`, {status})
        .then(response => response.data)
        .catch(error => {
            console.log(error)
        })
};

export const AuthAPI = {
    authMe: () => instance
        .get(`auth/me`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return error;
        })
};
