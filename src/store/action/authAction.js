import { SocialAPI } from "../../api/api";

export const SET_LOGIN = "SET_LOGIN";

const setLoginAC = (data) => ({type : SET_LOGIN, payload : data})

export const setLoginThunk = (email, password) => (dispatch) => {
    SocialAPI.setLogin(email, password).then((res) => dispatch(setLoginAC(res.data.data)))
}