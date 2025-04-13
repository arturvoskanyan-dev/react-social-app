import { SocialAPI } from "../../api/api";

const GET_USERS = "GET_USERS";

const getUsersAC = (users) => ({type : GET_USERS, payload : users})

const getUsersThunk = () => (dispatch) => {
    SocialAPI.getUsers().then((res) => dispatch(getUsersAC(res.data.items)))
}

export {GET_USERS, getUsersThunk}