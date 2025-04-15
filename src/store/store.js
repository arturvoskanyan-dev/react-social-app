import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    usersPage: usersReducer,
    userPage: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;