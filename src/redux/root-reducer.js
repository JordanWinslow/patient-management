import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "localforage"

import patients from "./features/patients/patientsSlice"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["patients"]
}

const rootReducer = combineReducers({
  patients // reference to our patients slice of state, using combine reducers in case we want to add more state slices later
})

export default persistReducer(persistConfig, rootReducer)
