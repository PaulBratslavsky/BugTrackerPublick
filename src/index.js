import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import UserContextProvider from './context/userContext'
import './index.css';

import Layout from './Layout';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Layout />
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
