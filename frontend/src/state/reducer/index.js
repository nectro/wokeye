import { combineReducers } from "redux";
import userReducer from "./userReducer"
import projectReducer from "./projectReducer"

const reducers = combineReducers({
    user:userReducer,
    project:projectReducer
})

export default reducers