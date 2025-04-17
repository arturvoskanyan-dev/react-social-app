import { SocialAPI } from "../../api/api";

export const SET_LOGIN = "SET_LOGIN";
export const LOG_OUT = "LOG_OUT";

const setLoginAC = (data) => ({type : SET_LOGIN, payload : data})
export const logOutAC = () => ({type : LOG_OUT})

export const setLoginThunk = (email, password) => (dispatch) => {
    SocialAPI.setLogin(email, password).then((res) => dispatch(setLoginAC(res.data)))
}