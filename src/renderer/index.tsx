import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <HelmetProvider>
    <Suspense>
      <App />
    </Suspense>
  </HelmetProvider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg: any) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
