import {USER, GET_STATUS, SET_STATUS} from "../action/userAction"

const initState = {
    user: {},
    userStatus: ""
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_STATUS:
            return {
                ...state,
                userStatus: action.payload
            }
        
        case SET_STATUS:
            return {
                ...state,
                userStatus: action.payload
            }

        default : 
            return state
    }
}

export default userReducer;