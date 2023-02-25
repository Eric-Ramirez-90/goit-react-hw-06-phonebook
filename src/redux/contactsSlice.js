import { createSlice, nanoid } from '@reduxjs/toolkit';
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
      state.contacts.push(contact);
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

export const { addcontact, deleteContact, filteredContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
