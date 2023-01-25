import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom';

import { initMockApi } from './__mocks__/workers';
import Toast from './components/shared/Toast';
import { isDevEnv } from './constants/env';
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

if (isDevEnv) {
  initMockApi();
}

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <React.StrictMode>
      <App />
      <Toast />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
);
