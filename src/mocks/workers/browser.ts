import { setupWorker, SetupWorkerApi } from 'msw';

import { handlers } from '../handlers';
export const browserWorker: SetupWorkerApi = setupWorker(...handlers);
