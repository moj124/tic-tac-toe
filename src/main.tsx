import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import App from './App';

const isDevelopment = import.meta.env.MODE === 'development';

// eslint-disable-next-line react-refresh/only-export-components
const RootComponent = isDevelopment ? (
  <React.StrictMode>
    <App/>
  </React.StrictMode>
) : <App/>;

ReactDOM.createRoot(document.getElementById('root')!).render(RootComponent);
