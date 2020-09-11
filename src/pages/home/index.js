import React, { useEffect } from 'react'
import Header from './components/Header';
import CustomersList from './containers/CustomersList';
// import Footer from '../../utils/footer/Footer';
import { ModalContainer } from '../../utils/modal-container/ModalContainer';
import PropTypes from 'prop-types'
// import Button from "@material-ui/core/Button";
import { connect } from 'react-redux'
import styled from 'styled-components'
import {_fetchCostumers} from '../../actions/fetchCostumers'
import { getCustomerDataFromStore } from "../../selectors/customers";
import { withRouter } from 'react-router-dom';
import './index.css';


const StyledButton = styled.button`
  background: transparent;
  color: #fff;
  font-size: 1em;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  border: 2px solid #ffffff77;
  margin-top: 10px;
  transition: ease 1s;
  &:hover {
    transition: ease 1s;
    // color: #fff;
    background: #5ab735;
    border: 2px solid #438925;
    cursor: pointer;
  }
`; 

const CustomerPage = ({
  headerTitle,
  customerData,
  history,
  fetchCostumers,
}) => {
  
  useEffect(() => {
    if (customerData.length === 0) {
      fetchCostumers();
    }
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
