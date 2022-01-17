import { combineReducers } from "redux";
import contentReducer from "./reducers/contentReducer";

const rootReducer = combineReducers({
  content: contentReducer,
});

export default rootReducer;
