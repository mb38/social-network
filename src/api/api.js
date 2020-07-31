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
    unfollow(id) {
        return instanse.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    follow(id) {
        return instanse.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        console.log('Obsolete method. Use profileAPI');
        return profileAPI.getProfile(userId);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/` + userId);
    },
    getUserStatus(userId) {
        return instanse.get(`profile/status/` + userId);
    },
    updateUserStatus(status) {
        return instanse.put(`profile/status`, {status: status});
    },

}

export const authAPI = {
    me() {
        return instanse.get('auth/me/');
    },
    login( email, password, rememberMe = false ) {
        return instanse.post('auth/login', { email, password, rememberMe });
    },
    logout() {
        return instanse.delete('auth/login');
    }
}