import http from '@/lib/http';

export const categoryApi = {
  list: async () => {
    const response = await http.get<string[]>('/products/categories');
    return response.data;
  },
};
