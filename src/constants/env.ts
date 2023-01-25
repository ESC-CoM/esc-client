const isServer = typeof window === 'undefined';
const devEnv = process.env.NODE_ENV === 'development';
const prodEnv = process.env.NODE_ENV === 'development';
export { devEnv, isServer, prodEnv };
