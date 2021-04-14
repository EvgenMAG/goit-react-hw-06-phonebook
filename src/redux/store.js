// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import reducers from './contacts-reducer';

// ========ToolKit =======

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  items: reducers.itemsReducers,
  filter: reducers.filterReducer,
});

const persistedReducer = persistReducer(persistConfig, contactsReducer);

let store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

let persistor = persistStore(store);

export { store, persistor };

// =================================

// const contactsReducer = combineReducers({
//   items: reducers.itemsReducers,
//   filter: reducers.filterReducer,
// });
// const rootReducer = combineReducers({ contacts: contactsReducer });

// const store = configureStore(rootReducer);

// export default store;
