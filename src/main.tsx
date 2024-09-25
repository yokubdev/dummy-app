import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/app/styles/main.scss';

import App from '@/app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
