import {USER} from "../action/userAction"

const initState = {
    user: {}
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case USER:
            return {
                ...state,
                user: action.payload
            }
        default : 
            return state
    }
}

export default userReducer;