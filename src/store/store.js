import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";
import searchReduer from "./reducers/searchReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    usersPage: usersReducer,
    searchUser: searchReduer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;