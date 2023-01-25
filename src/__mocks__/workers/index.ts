import { isServer } from 'src/constants/env';

const initMockApi = async () => {
  if (isServer) {
    const { serverWorker } = await import('@mocks/workers/server');
    serverWorker.listen();
  } else {
    const { browserWorker } = await import('@mocks/workers/browser');
    browserWorker.start();
  }
};

export { initMockApi };
