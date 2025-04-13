import {GET_USERS, CHANGE_PAGE, TOTAL_USERS_COUNT} from "../action/usersAction"

const initState = {
    users: [],
    page: 1,
    totalUsersCount: 0,
    totalUsersPageCount: 100
}

const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload
            }
        default: 
            return state
    }
}

export default usersReducer;