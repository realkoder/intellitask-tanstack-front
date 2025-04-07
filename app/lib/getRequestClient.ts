import { getWebRequest } from '@tanstack/react-start/server';
import Client, { Environment, Local } from './client';

/**
 * Returns the generated Encore request client for either the local or staging environment.
 * If we are running the frontend locally we assume that our Encore backend is also running locally.
 */
const getRequestClient = (cookies?: string) => {
  const env = import.meta.env.DEV ? Local : Environment('staging');

  return new Client(env, {
    auth: {
      cookie: cookies,
    },
    requestInit: {
      credentials: 'include',
    },
  });
};

export default getRequestClient;

export const getRequestClientWithAuth = () => {
  const env = import.meta.env.DEV ? Local : Environment('staging');

  return new Client(env, {
    auth: {
      cookie: getWebRequest()?.headers.get('cookie') ?? undefined,
    },
    requestInit: {
      credentials: 'include',
    },
  });
};

export const getRequestClientWithAuthAndCache = () => {
  const env = import.meta.env.DEV ? Local : Environment('staging');

  return new Client(env, {
    auth: {
      cookie: getWebRequest()?.headers.get('cookie') ?? undefined,
    },
    requestInit: {
      cache: 'force-cache',
      credentials: 'include',
    },
  });
};
