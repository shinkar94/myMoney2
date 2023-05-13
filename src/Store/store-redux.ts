// import {combineReducers,legacy_createStore as createStore} from "redux";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {allStateReducer} from "../Reducer/allStateReducer";
import {helperReducer} from "../Reducer/helperReducer";
import {cardsReducer} from "../Reducer/cardsReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";


export const reducers = combineReducers({
   allState: allStateReducer,
   helper: helperReducer,
   wallets: cardsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));
export type RootState=ReturnType<typeof reducers>
export type RootStateThunk = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootStateThunk, unknown,AnyAction>

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateThunk,
    unknown,
    AnyAction
    >