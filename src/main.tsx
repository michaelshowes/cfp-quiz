import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <main className={'h-dvh px-8 md:px-20'}>
    <App />
  </main>
);
