import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header';
import CustomersList from './containers/CustomersList';
import { ModalContainer } from '../../utils/components/modal-container/ModalContainer';
import { StyledButton } from '../../utils/components/buttons/StyledButton';
import { connect } from 'react-redux'
import {_fetchCostumers} from '../../actions/fetchCostumers'
import { getCustomerDataFromStore } from "../../selectors/customers";
import { withRouter } from 'react-router-dom';
import './index.css';

const CustomerPage = ({
  headerTitle,
  customerData,
  history,
  fetchCostumers,
}) => {

  // console.log(customerData);
  
  useEffect(() => {
    // if (customerData.length === 0) 
      console.log('Fetch')
      fetchCostumers();
    // }
  }, [fetchCostumers]);

  const createNewCustomer = () => {
    history.push("/customer/new");
  };

  return (
    <div className="containerHome">
      <Header title={headerTitle || "Clientes"} />
        <ModalContainer>
          <CustomersList customerData={customerData} />
        </ModalContainer>
        <StyledButton onClick={createNewCustomer}>
          New Customer
        </StyledButton>
    </div>
  );
};

CustomerPage.defaultProps = {
  customerData: []
}

CustomerPage.propTypes = {
  headerTitle: PropTypes.string,
  footer: PropTypes.string,
  fetchCostumers: PropTypes.func.isRequired,
  customerData: PropTypes.array.isRequired,
};

const mapState = state => ({
  customerData: getCustomerDataFromStore(state),
});

const mapDispatch = (dispatch) => ({
  fetchCostumers: () => dispatch(_fetchCostumers()),
});

export default withRouter(connect(mapState, mapDispatch)(CustomerPage));
