import React from 'react'
import './ContactList.css'
import Client from '../components/Client';
import PropTypes from 'prop-types'

const ContactList = ({ contactsData }) => {
  return (
    <div className="contactListContainer">
      { contactsData.map( (client, index) => {
        return (
          <Client 
            key={index}
            dni={client.dni}
            urlPath={'client'}
            clientName={client.name}
          />
        )
      })}
    </div>
  );
};

ContactList.propTypes = {

}

export default ContactList
