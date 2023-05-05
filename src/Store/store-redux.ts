import {combineReducers,legacy_createStore as createStore} from "redux";
import {allStateReducer} from "../Reducer/allStateReducer";
import {helperReducer} from "../Reducer/helperReducer";
import {cardsReducer} from "../Reducer/cardsReducer";


export const reducers = combineReducers({
   allState: allStateReducer,
   helper: helperReducer,
   wallets: cardsReducer
})

export const store = createStore(reducers);
export type RootState=ReturnType<typeof reducers>
