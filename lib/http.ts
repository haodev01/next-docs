import { listApi } from '@/configs';
import axios from 'axios';

export const isClient = () => typeof window !== 'undefined';
const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000 * 60 * 5,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

request.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

type Response<T> = {
  data: T;
  status: number;
};
const http = {
  post: async <T>(url: string, data = {}, conf = {}): Promise<Response<T>> => {
    return request.post(url, data, conf);
  },
  get: async <T>(url: string, params = {}, conf = {}): Promise<Response<T>> => {
    return request.get(url, {
      params,
      ...conf,
    });
  },
  put: async () => {},
  delete: () => {},
  api: listApi,
};

export default http;
