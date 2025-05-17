import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // إضافة هذه السطر
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* إضافة BrowserRouter هنا */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
