import {FETCH_COSTUMERS} from '../constants/fetchCostumers'
import { createAction } from 'redux-actions'
import { apiFetchCustomers } from '../utils/api/api'

export const _fetchCostumers = createAction(FETCH_COSTUMERS,apiFetchCustomers);