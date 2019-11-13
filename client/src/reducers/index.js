import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import error_reducer from "./error_reducer";

export default combineReducers({
  auth: authReducer,
  errors: error_reducer
});
