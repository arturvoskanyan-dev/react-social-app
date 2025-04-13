import { SocialAPI } from "../../api/api";

export const GET_USERS = "GET_USERS";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT"

const getUsersAC = (users) => ({type : GET_USERS, payload : users})
export const changePageAC = (page) => ({type : CHANGE_PAGE, payload : page})
export const totalUsersCountAC = (totalCount) => ({type : TOTAL_USERS_COUNT, payload : totalCount})

export const getUsersThunk = (page) => (dispatch) => {
    SocialAPI.getUsers(page).then((res) => {
        dispatch(totalUsersCountAC(res.data.totalCount))
        dispatch(getUsersAC(res.data.items))
    })
}
