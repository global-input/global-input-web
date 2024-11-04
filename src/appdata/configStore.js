// Remove AsyncStorage import
// import AsyncStorage from "@react-native-community/async-storage";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk';

import { globalInputSettings } from "./reducers/globalInputSettings";
import { userSettings, generateRandomString } from "./reducers/userSettings";
import { domainFormMappings } from "./reducers/domainFormMappings";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
  globalInputSettings: globalInputSettings.reducer,
  userSettings: userSettings.reducer,
  domainFormMappings: domainFormMappings.reducer,
});

const appliedMiddleWare = applyMiddleware(thunk);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default function configStore(onCompletion?: () => void) {
  const store = createStore(persistedReducer, appliedMiddleWare);
  const persistor = persistStore(store, undefined, onCompletion);
  return { store, persistor };
}

export { generateRandomString };