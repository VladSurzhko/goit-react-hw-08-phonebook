import axios from "axios"; 
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64ad6599b470006a5ec5e58f.mockapi.io";
// const BASE_URL = 'https://64ad6599b470006a5ec5e58f.mockapi.io'

// export const fetchContacts = async () => {
//     const response = await axios.get(`${BASE_URL}/contacts`);
//     return response.data;
//   };
  
//   export const addContact = async newContact => {
//     await axios.post(`${BASE_URL}/contacts`, newContact);
//   };
  
//   export const deleteContact = async contactId => {
//     await axios.delete(`${BASE_URL}/contacts/${contactId}`);
//   };


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}, { rejectWithValue }) => {
      try {
        const response = await axios.post('/contacts', {name, number});
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  