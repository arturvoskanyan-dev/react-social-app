import { SocialAPI } from "../../api/api";

export const SEARCH_USER = "SEARCH_USER";

const searchUserAC = (userData) => ({type : SEARCH_USER, payload : userData});

export const searchUserThunk = (userId) => (dispatch) => {
    SocialAPI.getSearchUser(userId)
    .then((res) => dispatch(searchUserAC(res.data)))
    .catch((err) => console.log("there is no such id user"))
}