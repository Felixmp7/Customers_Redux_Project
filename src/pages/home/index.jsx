import React from 'react'
import Header from './components/Header';
import ContactList from './containers/ContactList';
import FooterActions from './containers/FooterActions';
import PropTypes from 'prop-types'
import './index.css';

const clientsData = [
  {
    id: "30000001",
    dni: "30000001",
    name: "Pablo Alborán",
    age: 30,
  },
  {
    id: "500000",
    dni: "500000",
    name: "Enrique Melo",
    age: 40,
  },
  {
    dni: "6868686",
    name: "Gabriel Pacheco",
    age: 10,
    id: "XSCfaW5",
  },
  {
    name: "Doris Alonso",
    dni: "99999",
    age: 11,
    id: "kxmVQVd",
  },
  {
    id: "30000001",
    dni: "30000001",
    name: "Pablo Alborán",
    age: 30,
  },
  {
    id: "500000",
    dni: "500000",
    name: "Enrique Melo",
    age: 40,
  },
  {
    dni: "6868686",
    name: "Gabriel Pacheco",
    age: 10,
    id: "XSCfaW5",
  },
  {
    name: "Doris Alonso",
    dni: "99999",
    age: 11,
    id: "kxmVQVd",
  },
  {
    id: "30000001",
    dni: "30000001",
    name: "Pablo Alborán",
    age: 30,
  },
  {
    id: "500000",
    dni: "500000",
    name: "Enrique Melo",
    age: 40,
  },
  {
    dni: "6868686",
    name: "Gabriel Pacheco",
    age: 10,
    id: "XSCfaW5",
  },
  {
    name: "Doris Alonso",
    dni: "99999",
    age: 11,
    id: "kxmVQVd",
  },
  {
    id: "30000001",
    dni: "30000001",
    name: "Pablo Alborán",
    age: 30,
  },
  {
    id: "500000",
    dni: "500000",
    name: "Enrique Melo",
    age: 40,
  },
  {
    dni: "6868686",
    name: "Gabriel Pacheco",
    age: 10,
    id: "XSCfaW5",
  },
  {
    name: "Doris Alonso",
    dni: "99999",
    age: 11,
    id: "kxmVQVd",
  },
];

const ContactPage = ({headerTitle, contactsData, footer}) => {
  return (
    <div className="containerHome">
      <Header title={headerTitle || "Clientes"} />
      <ContactList contactsData={clientsData} />
      <FooterActions footer={footer} />
    </div>
  );
}

ContactPage.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  footer: PropTypes.string,
}

export default ContactPage;
