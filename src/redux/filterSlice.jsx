import { createSlice } from "@reduxjs/toolkit";

const filterState = ""

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterState,
    reducers: {
      filterUser(state, action) {
       return (state = action.payload);
      },
    },
});

export default filterSlice

export const { filterUser } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;