'use client';
import Cookies from 'js-cookie';
import { AUTH_COOKIE_NAME } from './constants';

export const getToken = (): string | undefined => {
  const token = Cookies.get(AUTH_COOKIE_NAME);

  if (!token) return;

  return JSON.parse(token);
};

export const setToken = (token: string, expires?: number | Date | undefined) => {
  Cookies.set(AUTH_COOKIE_NAME, JSON.stringify(token), { expires });
};

export const clearToken = () => {
  Cookies.remove(AUTH_COOKIE_NAME);
};
