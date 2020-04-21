import task from "./task";
import user from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ 
  task, 
  user 
});

export default rootReducer;