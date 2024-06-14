import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';
import { StoreProvider } from '@/app/providers/storeProvider';

const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
