import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './reducer';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});


// import {combineReducers, configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { filterReducer } from './filterSlice';
// import { contactsReducer } from './contactSlice';
// import { persistStore, 
// persistReducer,
// FLUSH,
// REHYDRATE,
// PAUSE,
// PERSIST,
// PURGE,
// REGISTER } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({

//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

