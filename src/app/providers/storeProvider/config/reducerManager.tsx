// import { Reducer, ReducersMapObject, UnknownAction, combineReducers } from '@reduxjs/toolkit';

// import { IStateSchema, KeysOfStateSchemaType } from './IStateSchema';

// export function createReducerManager(initialReducers: ReducersMapObject<IStateSchema>) {
//   // Create an object which maps keys to reducers
//   const reducers = { ...initialReducers };

//   // Create the initial combinedReducer
//   let combinedReducer = combineReducers(reducers);

//   // An array which is used to delete state keys when reducers are removed
//   let keysToRemove: Array<KeysOfStateSchemaType> = [];

//   return {
//     getReducerMap: () => reducers,

//     // The root reducer function exposed by this object
//     // This will be passed to the store
//     reduce: (state: IStateSchema, action: UnknownAction) => {
//       // If any reducers have been removed, clean up their state first
//       if (keysToRemove.length > 0 && state) {
//         state = { ...state };
//         keysToRemove.forEach(key => delete state[key]);
//         keysToRemove = [];
//       }

//       // Delegate to the combined reducer
//       return combinedReducer(state, action);
//     },

//     // Adds a new reducer with the specified key
//     add: (key: KeysOfStateSchemaType, reducer: Reducer) => {
//       if (!key || reducers[key]) {
//         return;
//       }

//       // Add the reducer to the reducer mapping
//       reducers[key] = reducer;

//       // Generate a new combined reducer
//       combinedReducer = combineReducers(reducers);
//     },

//     // Removes a reducer with the specified key
//     remove: (key: KeysOfStateSchemaType) => {
//       if (!key || !reducers[key]) {
//         return;
//       }

//       // Remove it from the reducer mapping
//       delete reducers[key];

//       // Add the key to the list of keys to clean up
//       keysToRemove.push(key);

//       // Generate a new combined reducer
//       combinedReducer = combineReducers(reducers);
//     },
//   };
// }
