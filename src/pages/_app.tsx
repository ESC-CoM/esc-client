import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { isServer } from 'src/constants/env';

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

if (isServer) {
  (async () => {
    const { server } = await import('../mocks/workers/server');
    server.listen();
  })();
}

export default function App({ Component, pageProps }: AppProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    async function initMocks() {
      const { browser } = await import('../mocks/workers/browser');
      await browser.start();
      setShouldRender(true);
    }
    if (!shouldRender) initMocks();
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
