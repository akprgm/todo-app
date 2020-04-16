import reducers from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reducers,
  composeWithDevTools()
)
 