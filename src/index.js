import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux';
import {persistGate} from 'redux-persist/integration/react';
import store from './redux/store';
import persistor from './redux/store';
import App from './App';
import './index.css';

ReactDOM.render(  
                  <Provider store={store}>
	              <BrowserRouter>
	              <persistGate persistor={persistor}>
	              <App />
	              </persistGate>
	              </BrowserRouter>
	              </Provider>,
	            document.getElementById('root')
	           );

