import React from "react";
import PropTypes from "prop-types";
import {ModalContainer} from '../../utils/modal-container/ModalContainer'
import { connect } from "react-redux";
import { getDetailsForCostumer } from "../../selectors/customers";
import './index.css'


const EditCustomerPage = ({ dni, customerDetails }) => {
  const {age, name} = customerDetails
  // console.log(customerDetails)
  return (
    <div className="containerEditCustomer">
      <ModalContainer>
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
      </ModalContainer>
    </div>
  );
};

EditCustomerPage.propTypes = {
  customerName: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  customerDetails: PropTypes.object.isRequired,
};

const mapState = (state, {dni}) => ({
  customerDetails: getDetailsForCostumer(state,dni)
})

export default connect(mapState,null)(EditCustomerPage);
