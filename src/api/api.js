import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "e5d304c3-76cc-49a8-a021-9a1e7009afe8",
    }
})

export const SocialAPI = {
    getUsers(page = 1) {
        return instance.get(`/users?page=${page}&count=100`)
    },

    getUser(userId) {
        return instance.get(`/profile/${userId}`)
    },

    setLogin(email, password) {
        return instance.post(`/auth/login`, {email, password})
    },

    changePhoto(file) {
        let formData = new FormData();
        formData.append("file", file)
        return instance.put("profile/photo", formData)
    }
}