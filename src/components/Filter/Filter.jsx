import React from "react";
import css from '../Phonebook/phonestyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from "redux/selectors";
import { filterUser } from "redux/filterSlice";



export const Filter = () => {
  const dispatch = useDispatch()

  const changeFilter = event => {
    dispatch(filterUser(event.currentTarget.value));
  };

   const value = useSelector(selectFilter)

  return (
    
    <label className={css.clabel} htmlFor="filterInput">
      Find contacts by name:
      <input
        className={css.cinput}
        id="filterInput"
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </label>
    
  );
};