import { SocialAPI } from "../../api/api";

export const USER = "USER";

const userAC = (userData) => ({type : USER, payload : userData});

export const userThunk = (userId) => (dispatch) => {
    SocialAPI.getUser(userId)
    .then((res) => dispatch(userAC(res.data)))
    .catch((err) => console.log("there is no such id user"))
}