import {combineReducers,legacy_createStore as createStore} from "redux";
import {allStateReducer} from "../Reducer/allStateReducer";


export const reducers = combineReducers({
   allState: allStateReducer
})

export const store = createStore(reducers);
export type RootState=ReturnType<typeof reducers>
