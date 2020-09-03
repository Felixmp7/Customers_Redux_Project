import React, { useEffect } from 'react'
import Header from './components/Header';
import CustomersList from './containers/CustomersList';
import Footer from '../../utils/footer/Footer';
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux'
import {_fetchCostumers} from '../../actions/fetchCostumers'
import { getCustomerDataFromStore } from "../../selectors/customers";
import { withRouter } from 'react-router-dom';
import './index.css';

const CustomerPage = ({
  headerTitle,
  contactsData,
  footer,
  customerData,
  history,
  fetchCostumers,
}) => {
  
  useEffect(() => {
    fetchCostumers();
  }, [fetchCostumers]);

  const createNewCustomer = () => {
    history.push("/customer/new");
  };

  return (
    <div className="containerHome">
      <Header title={headerTitle || "Clientes"} />
      <CustomersList customerData={customerData} />
      <Footer>
        <Button variant="outlined" onClick={createNewCustomer}>
          New Customer
        </Button>
      </Footer>
    </div>
  );
};

CustomerPage.defaultProps = {
  customerData: []
}

CustomerPage.propTypes = {
  headerTitle: PropTypes.string.isRequired,
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
