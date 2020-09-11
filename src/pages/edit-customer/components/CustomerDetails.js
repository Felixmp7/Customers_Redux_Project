import React from 'react'
import PropTypes from 'prop-types'

const CustomerDetails = ({name,dni,age}) => {
  return (
    <>
      <h2>Edición del Cliente</h2>
      <div>
        <strong>Nombre:</strong>
        <i>{name}</i>
      </div>
      <div>
        <strong>DNI:</strong>
        <i>{dni}</i>
      </div>
      <div>
        <strong>Age:</strong>
        <i>{age}</i>
      </div>
    </>
  )
}

CustomerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default CustomerDetails;
