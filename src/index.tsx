import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
      <p>EC2 Instance $(hostname -f)</p>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
