import { ACCESSTOKEN } from 'src/constants/auth';

import 'axios';

declare module 'axios' {
  export interface HeadersDefaults {
    Cookie?: string;
    [ACCESSTOKEN]?: string;
  }
}
