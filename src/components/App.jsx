import { lazy, useEffect  } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations'
import { useAuth } from './UseAuth/useAuth'
import { RestrictedRoute } from './RestrictedRoute'
import { PrivateRoute } from './PrivateRoute'
import Layout from './Layout'


const Home = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

 export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactPage} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
      </section>

  );
};








// import React, { useEffect } from "react";
// import css from "../components/Phonebook/phonestyle.module.css";
// import ContactForm from "components/ContactForm/ContactForm.jsx";
// import Filter from "components/Filter/Filter.jsx";
// import ContactList from "components/ContactList/ContactList";
// import { filterUser } from "redux/filterSlice";
// import { useSelector, useDispatch } from 'react-redux';
// import {selectFilter, selectContacts } from '../redux/selectors'
// import { addContact, deleteContact, fetchContacts } from "redux/creatThunk";

// const Phonebook = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleAddContact = (name, number) => {
//     const errorContact = contacts.find((contact) => contact.name === name);

//     if (errorContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     dispatch(addContact({ name, number }));
//   };

//   const handleDeleteContact = (contactId) => {
//     dispatch(deleteContact(contactId));
//   };


//   const handleFilterChange = (event) => {
//     const { value } = event.target;
//     dispatch(filterUser(value));
//   };

//   return (
//     <div className={css.section}>
//       <h2 className={css.contText}>Phonebook</h2>

//       <ContactForm onAddContact={handleAddContact} />

//       <div className={css.formContact}>
//         <h2 className={css.text}>Contacts</h2>

//         <Filter filter={filter} onFilterChange={handleFilterChange} />

//         <ContactList
//           contacts={contacts}
//           filter={filter}
//           onDeleteContact={handleDeleteContact}
//         />
//       </div>
//     </div>
//     // <div className={css.}>
//     //   <h2 className={css.ptitle}>Phonebook</h2>

//     //   <ContactForm onAddContact={handleAddContact} />

//     //   <div className={css.ccont}>
//     //     <h2 className={css.ctitle}>Contacts</h2>

//     //     <Filter filter={filter} onFilterChange={handleFilterChange} />

//     //     <ContactList
//     //       contacts={contacts}
//     //       filter={filter}
//     //       onDeleteContact={handleDeleteContact}
//     //     />
//     //   </div>
//     // </div>
//   );
// };

// export default Phonebook;


// export const App = () => {


//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         padding: "40px",
//         color: "#010101"
//       }}
//     >
//       <Phonebook />
//     </div>
//   );
// };








