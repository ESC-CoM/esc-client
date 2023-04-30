import { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { isDevEnv } from 'src/constants/env';
import { initMockApi } from 'src/mocks/workers';

import '@styles/reset.scss';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 3 * 60 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

if (isDevEnv) {
  initMockApi();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
