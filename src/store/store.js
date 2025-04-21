import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import searchUsersReducer from "./reducers/searchUsersReducer";
import followReducer from "./reducers/followReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    usersPage: usersReducer,
    userPage: userReducer,
    auth: authReducer,
    searchUsers: searchUsersReducer,
    follow: followReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;