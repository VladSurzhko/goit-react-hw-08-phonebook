import React, { useEffect } from "react";
import css from "../components/Phonebook/phonestyle.module.css";
import ContactForm from "components/ContactForm/ContactForm.jsx";
import Filter from "components/Filter/Filter.jsx";
import ContactList from "components/ContactList/ContactList";
import { filterUser } from "redux/filterSlice";
import { useSelector, useDispatch } from 'react-redux';
import {selectFilter, selectContacts } from '../redux/selectors'
import { addContact, deleteContact, fetchContacts } from "redux/creatThunk";

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    const errorContact = contacts.find((contact) => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };


  const handleFilterChange = (event) => {
    const { value } = event.target;
    dispatch(filterUser(value));
  };

  return (
    <div className={css.section}>
      <h2 className={css.contText}>Phonebook</h2>

      <ContactForm onAddContact={handleAddContact} />

      <div className={css.formContact}>
        <h2 className={css.text}>Contacts</h2>

        <Filter filter={filter} onFilterChange={handleFilterChange} />

        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
    // <div className={css.}>
    //   <h2 className={css.ptitle}>Phonebook</h2>

    //   <ContactForm onAddContact={handleAddContact} />

    //   <div className={css.ccont}>
    //     <h2 className={css.ctitle}>Contacts</h2>

    //     <Filter filter={filter} onFilterChange={handleFilterChange} />

    //     <ContactList
    //       contacts={contacts}
    //       filter={filter}
    //       onDeleteContact={handleDeleteContact}
    //     />
    //   </div>
    // </div>
  );
};

export default Phonebook;


export const App = () => {


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        color: "#010101"
      }}
    >
      <Phonebook />
    </div>
  );
};








