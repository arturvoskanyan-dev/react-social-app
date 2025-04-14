import {SEARCH_USER} from "../action/searchAction"

const initState = {
    searchUser: {}
}

const searchReduer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH_USER:
            return {
                ...state,
                searchUser: action.payload
            }
        default : 
            return state
    }
}

export default searchReduer;