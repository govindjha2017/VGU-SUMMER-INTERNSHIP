import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <h1>Hello from my first react App</h1>
    <p>Namste </p>
    <App></App>
    <App/>
    {App()}
  </>
);
