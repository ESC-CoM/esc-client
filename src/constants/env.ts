const isServer = typeof window === 'undefined';
const isDevEnv = process.env.NODE_ENV === 'development';
const isProdEnv = process.env.NODE_ENV === 'production';
export { isDevEnv, isProdEnv, isServer };
