import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='w-full flex flex-col h-screen content-center items-center justify-center'>
    <App/>
    </main>
  </React.StrictMode>,
)
