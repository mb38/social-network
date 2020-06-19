import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '06940b77-bc80-4969-930b-9987e506da2f'
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    delFollow(id) {
        return instanse.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    postFollow(id) {
        return instanse.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
}