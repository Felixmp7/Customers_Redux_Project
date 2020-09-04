import { createSelector } from "reselect";

export const getCustomerDataFromStore = state => state.customerData;

// export const getDetailsForCostumer = (state, dni) => {
//   const customerDetails = state.customerData.find( customer => customer.dni === dni);
//   return customerDetails;
// };

export const getDetailsForCostumer = 
  createSelector(
    (state, dni) => state.customerData.find( customer => customer.dni === dni),
    customerDetails => customerDetails
  );