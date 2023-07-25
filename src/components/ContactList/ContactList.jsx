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


// import React from "react";
// import css from "../Phonebook/phonestyle.module.css";

// // import { useSelector } from "react-redux/es/hooks/useSelector";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "redux/creatThunk";


// const ContactList = ({contacts, filter}) => {

//   const dispatch = useDispatch();


//   const handleDeleteContact = (contactId) => {
//     dispatch(deleteContact(contactId));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul className={css.lists}>
//       {filteredContacts.map((contact) => (
//         <li className={css.items} key={contact.id}>
//           {contact.name}: {contact.number}
//           <button
//             className={css.btnDelete}
//             onClick={() => handleDeleteContact(contact.id)}
//           >
//             delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

