import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom';

import Toast from './components/shared/Toast';
import { isDevEnv } from './constants/env';
import { initMockApi } from './mocks/workers';
import App from './App';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: true,
      retry: false,
    },
  },
});

async function workerPrepare() {
  if (isDevEnv) await initMockApi();
  return Promise.resolve();
}

function renderWithWorker(dom: JSX.Element) {
  workerPrepare().then(() => {
    ReactDOM.render(dom, document.getElementById('root'));
  });
}

renderWithWorker(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <React.StrictMode>
      <App />
      <Toast />
    </React.StrictMode>
  </QueryClientProvider>
);
