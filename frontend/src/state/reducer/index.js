import { combineReducers } from "redux";
import userReducer from "./userReducer"
import projectReducer from "./projectReducer"
import projectListReducer from "./projectListReducer";

const reducers = combineReducers({
    user:userReducer,
    project:projectReducer,
    projectList:projectListReducer
})

export default reducers