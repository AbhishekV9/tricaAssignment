import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';


const store=createStore(rootReducer,applyMiddleware(thunk,logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


