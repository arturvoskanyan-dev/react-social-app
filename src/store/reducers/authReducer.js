import { LOG_OUT, SET_LOGIN,  } from "../action/authAction";

const initState = {
    userId: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_LOGIN:
            return {
                ...state,
                userId: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                userId: null
            }
        default:
            return state
    }
}

export default authReducer;