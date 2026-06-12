// reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
// import eventReducer from "./event";



const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  // event: eventReducer,
});

export default rootReducer;
