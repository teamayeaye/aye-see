import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './components/App.jsx';
import styles from './css/style.css';

render((
    // <BrowserRouter>
    <App />
    // </BrowserRouter>
), document.getElementById('root'));
