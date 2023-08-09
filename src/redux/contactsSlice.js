import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { initialState } from './initialState';

const pending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const rejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

//___________________________________FETCH----POST-----DELETE_______________

export const contactsFetch = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

export const addContacts = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

export const delContacts = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: pending,
    [fetchContacts.rejected]: rejected,
    [fetchContacts.fulfilled]: contactsFetch,
    [addContact.pending]: pending,
    [deleteContact.pending]: pending,
    [addContact.rejected]: rejected,
    [deleteContact.rejected]: rejected,
    [addContact.fulfilled]: addContacts,
    [deleteContact.fulfilled]: delContacts,
  },

//-------------------------------------------- variant two

  // extraReducers: (builder) => {
  //   builder
  //   .addCase(fetchContacts.pending, pending)
  //   .addCase(fetchContacts.rejected, rejected)
  //   .addCase(fetchContacts.fulfilled, contactsFetch)

  //   .addCase(addContact.pending, pending)
  //   .addCase(addContact.rejected, pending)
  //   .addCase(addContact.fulfilled, addContacts)

  //   .addCase(deleteContact.pending, pending)
  //   .addCase(deleteContact.rejected, rejected)
  //   .addCase(deleteContact.fulfilled, delContacts)
    
  // }
});

export const contactsReducer = contactsSlice.reducer;
