import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../Store/store-redux";


export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state:RootState
    dispatch: AppDispatch
    rejectValue: null
}>()