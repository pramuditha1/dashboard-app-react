import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";

const rootReducer = combineReducers({
    userInfo: authReducer
})

export const store = configureStore(
    { reducer: rootReducer }
)