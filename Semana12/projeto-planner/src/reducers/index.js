import { combineReducers } from "redux";
import tasks from "./getTasks";

export const rootReducer = combineReducers({
  // Seus reducers aqui
  tasks,
});
