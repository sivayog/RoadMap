import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import { Provider } from 'react-redux';
import { store } from './state/store';
import App from './App.tsx';
import './index.css';
import { RecoilRoot } from 'recoil';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </RecoilRoot>
      </Provider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
