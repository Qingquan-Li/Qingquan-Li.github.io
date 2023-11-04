import React from 'react';
import ReactDOM from 'react-dom/client';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import 'bootstrap/dist/css/bootstrap.css';
// Without this import, the navbar collapsed button does not working:
// stackoverflow.com/questions/66217242/collapsed-navbar-not-working-react-and-bootstrap-5
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
