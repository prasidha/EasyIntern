import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
// import Test from './component/Test'

ReactDOM.render(
 <ThemeProvider theme={}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


