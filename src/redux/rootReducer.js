import { combineReducers } from "redux";
import PhoneCardReduce from "./PhoneCardReduce";

const rootReducer = combineReducers({
  stateCard: PhoneCardReduce,
});

export default rootReducer
