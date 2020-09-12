// Dependencies
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
// Componentes
import Header from './components/Header';
import CustomersList from './containers/CustomersList';
import { ModalContainer } from '../../utils/components/modal-container/ModalContainer';
import { StyledButton } from '../../utils/components/buttons/StyledButton';
// Methods
import {_fetchCostumers} from '../../actions/fetchCostumers'
import { getCustomerDataFromStore } from "../../selectors/customers";
// CSS
import './index.css';

const NewCustomerButton = styled(StyledButton)`
  background: transparent;
  color: #fff;
  border: 2px solid #ffffff77;
  margin-top: 10px;
  &:hover {
    background: #5ab735;
    border: 2px solid #438925;
  }
`;

const CustomerPage = ({
  headerTitle,
  customerData,
  history,
  fetchCostumers,
}) => {
  
  useEffect(() => {
    console.log('Fetch');
    fetchCostumers();

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
        <NewCustomerButton onClick={createNewCustomer}>
          New Customer
        </NewCustomerButton>
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
