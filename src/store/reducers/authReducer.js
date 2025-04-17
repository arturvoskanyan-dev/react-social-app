import { LOG_OUT, SET_LOGIN,  } from "../action/authAction";

const initState = {
    userId: null,
    messages: []
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_LOGIN:
            return {
                ...state,
                userId: action.payload.data,
                messages: action.payload.messages
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