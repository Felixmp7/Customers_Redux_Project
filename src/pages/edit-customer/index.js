import React from "react";
import PropTypes from "prop-types";
import './index.css'

const EditContact = ({ clientName, dni, age }) => {
  return (
    <div className="containerEditContact">
      <div className="modal">
        <h2>Edición del Cliente</h2>
        <div>
          <strong>Nombre:</strong>
          <i>{clientName}</i>
        </div>
        <div>
          <strong>DNI:</strong>
          <i>{dni}</i>
        </div>
        <div>
          <strong>Age:</strong>
          <i>{age}</i>
        </div>
      </div>
    </div>
  );
};

EditContact.propTypes = {
  clientName: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default EditContact;
