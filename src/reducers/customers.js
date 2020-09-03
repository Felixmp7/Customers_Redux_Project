import {handleActions} from 'redux-actions';
import { FETCH_COSTUMERS } from '../constants/fetchCostumers';

export const customers = handleActions({
  [FETCH_COSTUMERS]: (state, action) => [...action.payload]
},[])