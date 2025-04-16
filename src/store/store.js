import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    usersPage: usersReducer,
    userPage: userReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;