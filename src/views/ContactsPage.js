import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactsList/ContactsList";
import Filter from "../components/Filter/Filter";

const ContactsPage = () => (
  <>
    <h1>Contacts</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
  </>
);

export default ContactsPage;