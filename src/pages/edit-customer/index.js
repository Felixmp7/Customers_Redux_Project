import React from "react";
import PropTypes from "prop-types";
import {ModalContainer} from '../../utils/modal-container/ModalContainer'
import CustomerDetails from './components/CustomerDetails';
import CustomerForm from './containers/CustomerForm';
import { connect } from "react-redux";
import { getDetailsForCostumer } from "../../selectors/customers";
import './index.css'


const EditCustomerPage = ({ dni, customerDetails }) => {
  const {age, name} = customerDetails
  console.log(dni)
  // console.log(customerDetails)
  return (
    <div className="containerEditCustomer">
      <ModalContainer>
        <CustomerDetails dni={dni} age={age} name={name} />
        <CustomerForm dni={dni} age={age} name={name} />
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
