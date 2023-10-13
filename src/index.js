import './custom.scss';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {apiSlice} from "./features/api/apiSlice";

ReactDOM.render(
  <React.StrictMode>
      <ApiProvider api={apiSlice}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
