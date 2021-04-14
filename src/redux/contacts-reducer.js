import { addContact, removeContact, filterContacts } from './contacts-actions';
// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionsTypes from './contacts-types';

const initialState = [];

const initialFilter = '';

// ========ToolKit =======
const itemsReducers = createReducer(initialState, {
  [addContact]: (state, { payload }) => {
    console.log(state);
    return [...state, payload];
  },
  [removeContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer(initialFilter, {
  [filterContacts]: (_, { payload }) => payload,
});
// ===============

// const itemsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionsTypes.ADDCONTACT:
//       return [...state, action.payload];

//     case actionsTypes.REMOVECONTACT:
//       return state.filter(({ id }) => id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialFilter, action) => {
//   switch (action.type) {
//     case actionsTypes.CONTACTFILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };
const reducers = { itemsReducers, filterReducer };

export default reducers;
