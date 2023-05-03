const isServer = typeof window === 'undefined';
const isDevEnv = process.env.NODE_ENV === 'development';
const isProdEnv = process.env.NODE_ENV === 'production';
const API_SERVER_URL = process.env.APP_API_URL;
const API_LOCAL_SERVER_URL = process.env.LOCAL_API_URL;

export { API_LOCAL_SERVER_URL, API_SERVER_URL, isDevEnv, isProdEnv, isServer };
