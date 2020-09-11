import { UPDATE_COSTUMERS } from "../constants/fetchCostumers";
import { createAction } from "redux-actions";
import { apiUpdateCostumer } from "../utils/api/customerData";

export const _updateCostumer = createAction(UPDATE_COSTUMERS,
  (id,costumer) =>  apiUpdateCostumer(id, costumer));
