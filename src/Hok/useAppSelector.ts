import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {RootState, store} from "../Store/store-redux";


// Use throughout your app instead of plain useDispatch and useSelector
//export const useAppDispatch = () => useDispatch<AppDispatch>() //для санок
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector