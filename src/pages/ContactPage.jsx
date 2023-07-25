import { ContactList } from '../components/ContactList/ContactList'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
} from '../redux/selectors';
import { fetchContacts } from 'redux/contactSlice';
import ContactForm from '../components/ContactForm/ContactForm'; 
import { Filter } from '../components/Filter/Filter'
import css from '../components/ContactForm/ContactForm'

const ContactPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.ptitle}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.ctitle}>Contacts</h2>
      
      <Filter />
      {contacts.length !== 0 && <ContactList />}
      
    </div>
  );
};

export default ContactPage;