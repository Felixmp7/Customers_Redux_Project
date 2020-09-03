import { createStore, compose } from "redux";
import reducers from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
  reducers,
  {},
  composeEnhancers()
);