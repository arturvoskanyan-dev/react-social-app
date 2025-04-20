import { SEARCH_USERS, SEARCH_TEXT } from "../action/searchUsersAction"

const initState = {
    searchText: "",
    users: []
}

const searchUsersReducer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default searchUsersReducer;