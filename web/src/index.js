import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import 'fontsource-roboto';
import rootReducer from './redux/rootReducer.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  cars: [],
  years: [],
  makes: [],
  filterSearch: {
    year: 2010,
    make: '',
    model: '',
    color: '',
    search: ''
  }
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
