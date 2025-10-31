import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { pokemonReducer } from './reducers/pokemon';
import { featuring, logger,upper } from './middlewares';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
    applyMiddleware(thunk, logger)
);

const store = createStore(pokemonReducer, composedEnhancers);

root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

