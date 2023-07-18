import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact} from './creatThunk'
import {
  handlerAddContactFulfilled,
  handlerDeleteContactFulfilled,
  handlerError,
  handlerFetchContactsFulfilled,
  handlerPendingAdd,
  handlerPendingDelete,
} from './builderReducer';

const arrayTHunk = [fetchContacts, deleteContact, addContact];
const handlerActionCreatorByStatus = (type) => {
  return arrayTHunk.map(item => item[type])
}
const contactsInitialState = {
  items: [],
  isAdding: false,
  isDeleting: false,
  // isLoading: false,
  error: null,
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlerFetchContactsFulfilled)
      .addCase(deleteContact.fulfilled, handlerDeleteContactFulfilled)
      .addCase(addContact.fulfilled, handlerAddContactFulfilled)
      .addCase(deleteContact.pending, handlerPendingDelete)
      .addCase(addContact.pending, handlerPendingAdd)
      .addMatcher(
        isAnyOf(...handlerActionCreatorByStatus('rejected')),
        handlerError
      );
  }
});

  export const contactsReducer = contactSlice.reducer;
  // export const selectContacts = state => state.contacts.items;
  // export const selectFilter = state => state.filter;




// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const contactsInitialState = [];

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addUser: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteUser(state, action) {
//       return state.filter((user) => user.id !== action.payload);
//     },
//   },
// });

// export const { deleteUser, addUser } = contactSlice.actions;
// export const selectContacts = (state) => state.contacts;
// export const selectFilter = (state) => state.filter;
// export const contactsReducer = contactSlice.reducer;




