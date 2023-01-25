import { setupServer, SetupServerApi } from 'msw/node';

import { handlers } from '../handlers';
export const serverWorker: SetupServerApi = setupServer(...handlers);
