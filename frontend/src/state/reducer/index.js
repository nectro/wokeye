import { combineReducers } from "redux";
import userReducer from "./userReducer"
import projectReducer from "./projectReducer"
import projectListReducer from "./projectListReducer";
import taskListReducer from "./taskListReducer";

const reducers = combineReducers({
    user:userReducer,
    project:projectReducer,
    projectList:projectListReducer,
    taskList:taskListReducer
})

export default reducers