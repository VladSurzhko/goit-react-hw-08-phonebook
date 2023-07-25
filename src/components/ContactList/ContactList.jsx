import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { selectFilterContact } from 'redux/selectors';
import css from "../Phonebook/phonestyle.module.css";

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilterContact);
 

  return (
    
    <ul className={css.llist}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            {contact.name}: {contact.number}
            {(
                <button
                  className={css.bbtn}
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              
            )}
          </li>
        ))}
      </ul>
      
  );
};


