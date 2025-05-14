import { getToken } from '@/utils/token';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const BASE_URL = 'http://83.217.220.231/api';

//Использовать для серверных запросов
export const axiosConfig = axios.create({
  baseURL: BASE_URL,
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

//Использовать для клиентских запросов с помощью tanstack-query
export const api = {
  get: <T, TParams = undefined | any>(url: string, queryParams?: TParams) =>
    axiosConfig.get<T>(url, { params: queryParams }).then(responseBody),
  post: <T>(url: string, body?: Record<string, any>) =>
    axiosConfig.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body?: Record<string, any>) =>
    axiosConfig.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axiosConfig.delete<T>(url).then(responseBody),
};

axiosConfig.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosConfig.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(
      new AxiosError(
        error?.response?.data?.message,
        error?.response?.status,
        error?.config,
        error?.request,
        error?.response,
      ),
    );
  },
);
