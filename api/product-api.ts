import http from '@/lib/http';
import { Product } from '@/types';

export const productApi = {
  getAll: async (params = { limit: 100 }) => {
    const response = await http.get<Product[]>('/products', {
      ...params,
    });
    return response.data;
  },
  getByCategory: async (params = { limit: 100, category: '' }) => {
    if (!params.category) return productApi.getAll(params);
    const response = await http.get<Product[]>(
      `/products/category/${params.category}`,
      {
        ...params,
      },
    );
    return response.data;
  },
  get: async (id: string) => {
    const response = await http.get<Product>(`/products/${id}`);
    return response.data;
  },
};
