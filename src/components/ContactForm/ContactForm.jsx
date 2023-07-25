import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactSlice";
import { selectContacts } from "redux/selectors";


import css from "../Phonebook/phonestyle.module.css";

 const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const isDuplicateContact = contacts.some(
      (contact) => contact.name === name || contact.number === number
    );

    if (isDuplicateContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({name, number}));
    setName("");
    setNumber("");
  };


  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
    setName(value);
  } else if (name === "number") {
    setNumber(value);
    }
};


    return (
      <form className={css.pform} onSubmit={handleSubmit}>
        <label className={css.contact} htmlFor="nameInput">
          Name
          <input
            className={css.cont}
            id="nameInput"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.contact} htmlFor="numberInput">
          Number
          <input
            className={css.cont}
            id="numberInput"
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
    }
 
  

export default ContactForm;





