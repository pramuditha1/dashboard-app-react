import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or "redux-persist/lib/sessionStorage" for session storage
import { combineReducers } from "redux";
import authReducer from "./slices/authReducer";

const rootReducer = combineReducers({
  userInfo: authReducer,
});

const persistConfig = {
  key: "root", // Change this to a unique key for your app
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
