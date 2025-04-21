import { GET_FOLLOW } from "../action/followAction";

const initState = {
    follow: false
}

const followReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_FOLLOW:
            return {
                ...state,
                follow: action.payload
            }
        default:
            return state
    }
}

export default followReducer;