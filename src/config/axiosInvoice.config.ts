import axios, { AxiosError, AxiosResponse } from 'axios';

const BASE_URL = 'https://admin.vanilapay.com/api/v2/';

const API_KEY_TOKEN = 'ysqYexhDkrzTWxBoPwXrbvkZNKBijecpV7qP7XpxsVwakyFvFDiWgcaP8eTnxoq9';

//Использовать для серверных запросов
export const axiosInvoiceConfig = axios.create({
  baseURL: BASE_URL,
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY_TOKEN}`,
  },
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

//Использовать для клиентских запросов с помощью tanstack-query
export const apiInvoice = {
  get: <T, TParams = undefined | any>(url: string, queryParams?: TParams) =>
    axiosInvoiceConfig.get<T>(url, { params: queryParams }).then(responseBody),
  post: <T>(url: string, body?: Record<string, any>, customHeaders?: Record<string, string>) =>
    axiosInvoiceConfig
      .post<T>(url, body, {
        headers: {
          ...axiosInvoiceConfig.defaults.headers.common,
          ...customHeaders,
        },
      })
      .then(responseBody),
  put: <T>(url: string, body?: Record<string, any>) =>
    axiosInvoiceConfig.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axiosInvoiceConfig.delete<T>(url).then(responseBody),
};

axiosInvoiceConfig.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInvoiceConfig.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(
      new AxiosError(
        error?.response?.data?.error,
        error?.response?.status,
        error?.config,
        error?.request,
        error?.response,
      ),
    );
  },
);
