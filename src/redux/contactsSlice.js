import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialContacts from '../components/initialContacts';

const contactsInitialState = initialContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsInitialState,
    filter: '',
  },
  reducers: {
    addcontact: (state, action) => {
      const { name, number } = action.payload;
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      state.contacts.unshift(contact);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addcontact, deleteContact, filteredContacts } =
  contactsSlice.actions;
