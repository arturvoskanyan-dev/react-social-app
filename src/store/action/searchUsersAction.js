import { SocialAPI } from "../../api/api";

export const SEARCH_USERS = "SEARCH_USERS";
export const SEARCH_TEXT = "SEARCH_TEXT";

const searchUsersAC = (users) => ({type : SEARCH_USERS, payload : users})
export const searchTextAC = (text) => ({type : SEARCH_TEXT, payload : text});

export const searchUsersThunk = (userName) => (dispatch) => {
    SocialAPI.searchUser(userName)
    .then((res) => dispatch(searchUsersAC(res.data)))
}