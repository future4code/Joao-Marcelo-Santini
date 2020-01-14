import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducerViagens } from "./viagens";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    viagens: reducerViagens,
    // Outros reducers aqui
  });
