import { createSlice } from "@reduxjs/toolkit";

const filterState = { value: '' }

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterState,
    reducers: {
      filterUser(state, action) {
       state.value = action.payload;
      },
    },
});

export default filterSlice

export const { filterUser } = filterSlice.actions;


