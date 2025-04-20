import { SocialAPI } from "../../api/api";

export const USER = "USER";
export const GET_STATUS = "GET_STATUS";
export const SET_STATUS = "SET_STATUS";

const userAC = (userData) => ({type : USER, payload : userData});
const getStatusAC = (status) => ({type : GET_STATUS, payload : status});
const setStatusAC = (newStatus) => ({type : SET_STATUS, payload : newStatus});

export const userThunk = (userId) => (dispatch) => {
    SocialAPI.getUser(userId)
    .then((res) => dispatch(userAC(res.data)))
    .catch((err) => console.log("there is no such id user"))
}

export const getStatusThunk = (userId) => (dispatch) => {
    SocialAPI.getStatus(userId)
    .then((res) => dispatch(getStatusAC(res.data)));
}

export const changeStatusThunk = (newStatus) => (dispatch) => {
    SocialAPI.changeStatus(newStatus)
    .then((res) => {
        if(res.data.resultCode === 0) {
            dispatch(setStatusAC(newStatus))
        }
    })
}