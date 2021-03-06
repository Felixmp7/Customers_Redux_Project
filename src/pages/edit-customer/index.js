import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import {ModalContainer} from '../../utils/components/modal-container/ModalContainer'
import CustomerDetails from './components/CustomerDetails';
import CustomerForm from './containers/CustomerForm';
import { connect } from "react-redux";
import { _fetchCostumers } from "../../actions/fetchCostumers";
import { _updateCostumer } from "../../actions/updateCostumer";
import { getDetailsForCostumer } from "../../selectors/customers";
import './index.css'
import { withRouter } from "react-router-dom";


const EditCustomerPage = ({
  dni,
  customerDetails,
  fetchCostumers,
  updateCostumer,
  history,
}) => {
  const [customerDataLoaded, setCustomerDataLoaded] = useState(false);

  const handleFetch = useCallback(async () => {
    if (!customerDetails.name) {
      // console.log("Fetch");
      await fetchCostumers();
      setCustomerDataLoaded(true);
    } else {
      setCustomerDataLoaded(true);
    }
  }, [fetchCostumers, customerDetails]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const handleSubmit = (values) => {
    console.log(values);
    const { id } = values;
    return updateCostumer(id, values);
  };

  const handleGoBack = () => history.goBack();

  if (customerDataLoaded) {
    const { age, name, id } = customerDetails;
    return (
      <div className="containerEditCustomer">
        <ModalContainer>
          <CustomerDetails dni={dni} age={age} name={name} />
          <CustomerForm
            dni={dni}
            age={age}
            id={id}
            name={name}
            onSubmitSuccess={handleGoBack}
            onSubmit={handleSubmit}
            onBack={handleGoBack}
          />
        </ModalContainer>
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

EditCustomerPage.defaultProps = {
  customerDetails: {},
};

EditCustomerPage.propTypes = {
  dni: PropTypes.string.isRequired,
  customerDetails: PropTypes.object,
  fetchCostumers: PropTypes.func.isRequired,
  updateCostumer: PropTypes.func.isRequired,
};

const mapState = (state, {dni}) => ({
  customerDetails: getDetailsForCostumer(state,dni)
})

const mapDispatch = (dispatch) => ({
  fetchCostumers: () => dispatch(_fetchCostumers()),
  updateCostumer: (id, obj) => dispatch(_updateCostumer(id, obj)),
});

export default withRouter(connect(mapState, mapDispatch)(EditCustomerPage));
