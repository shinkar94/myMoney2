import {combineReducers,legacy_createStore as createStore} from "redux";
import {allStateReducer} from "../Reducer/allStateReducer";
import {helperReducer} from "../Reducer/helperReducer";


export const reducers = combineReducers({
   allState: allStateReducer,
   helper: helperReducer
})

export const store = createStore(reducers);
export type RootState=ReturnType<typeof reducers>
