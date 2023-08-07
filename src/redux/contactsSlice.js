import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

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

const contactsFetch = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const addContacts = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const delContacts = (state, action) => {
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
    [addContact.pending]: pending,
    [deleteContact.pending]: pending,
    [fetchContacts.rejected]: rejected,
    [addContact.rejected]: rejected,
    [deleteContact.rejected]: rejected,
    [fetchContacts.fulfilled]: contactsFetch,
    [addContact.fulfilled]: addContacts,
    [deleteContact.fulfilled]: delContacts,
  },
});

export const contactsReducer = contactsSlice.reducer;
