import {combineReducers,legacy_createStore as createStore} from "redux";
import {allStateReducer} from "./allStateReducer";

export const reducers = combineReducers({

   allState: allStateReducer})


export const store = createStore(reducers);
export type RootStateType  = typeof store