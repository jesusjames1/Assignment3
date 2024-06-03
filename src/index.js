import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavigationBr from './nav.jsx';
import Footer from './footer.jsx';
import Grid from './dmvinfo.jsx';
import Header from './header.jsx';
import App from './app.jsx';

// import './index.css';
// import App from './App';

    //can change other css properties

//let userName='John Doe'
//let userbirthyear=1990;


//practive: finish defining a new component DMVinfo. Inport to this .js file

//root.render(
//    <App />
//)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<App />

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals