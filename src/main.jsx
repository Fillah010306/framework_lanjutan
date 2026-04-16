import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import RegistrationForm from './pertemuan3/Form';
import DataPage from './pertemuan4/DataPage';

const currentPath = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {currentPath === '/pertemuan3' ? (
      <RegistrationForm />
    ) : currentPath === '/pertemuan4' ? (
      <DataPage />
    ) : (
      <App />
    )}
  </StrictMode>
);