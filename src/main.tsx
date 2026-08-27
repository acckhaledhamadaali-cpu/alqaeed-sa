// Ensure window.fetch has both getter and setter to prevent "Cannot set property fetch of #<Window> which has only a getter"
try {
  let customFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return customFetch;
    },
    set(newFetch) {
      customFetch = newFetch;
    },
    configurable: true,
    enumerable: true,
  });
} catch {
  try {
    const proto = Object.getPrototypeOf(window) || (typeof Window !== 'undefined' && Window.prototype);
    if (proto) {
      let curFetch = (proto as any).fetch || window.fetch;
      Object.defineProperty(proto, 'fetch', {
        get() {
          return curFetch;
        },
        set(newFetch: any) {
          curFetch = newFetch;
        },
        configurable: true,
        enumerable: true,
      });
    }
  } catch {
    // Ignore if not permitted
  }
}

import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}


