import { SET_LOGIN } from "../action/authAction";

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
        default:
            return state
    }
}

export default authReducer;