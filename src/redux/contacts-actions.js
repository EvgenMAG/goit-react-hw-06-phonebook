import { v4 as uuid4 } from 'uuid';
// import actionsTypes from './contacts-types';

import { createAction } from '@reduxjs/toolkit';

// ========ToolKit =======
export const addContact = createAction('contact/add', (name, number) => ({
  payload: { id: uuid4(), name, number },
}));
export const removeContact = createAction('contact/delete');
export const filterContacts = createAction('contact/filter');

// ========ToolKit =======

// export const addContact = (name, number) => ({
//   type: actionsTypes.ADDCONTACT,
//   payload: {
//     id: uuid4(),
//     name,
//     number,
//   },
// });

// export const removeContact = id => ({
//   type: actionsTypes.REMOVECONTACT,
//   payload: id,
// });

// export const filterContacts = name => ({
//   type: actionsTypes.CONTACTFILTER,
//   payload: `${name}`,
// });
