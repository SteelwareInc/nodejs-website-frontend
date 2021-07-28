import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/index';
import Footer from './footer/index';
import Main from './main/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  [
    <Main/>,
    <Header/>,
    <Footer/>
  ],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
