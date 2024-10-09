import http from '@/lib/http';
import { UserLogin, UserLoginForm } from '@/types';

export const authApi = {
  login: async (data: UserLoginForm) => {
    const response = await http.post<{ token: string }>('/auth/login', data);
    return response.data;
  },
  profile: async (id: string): Promise<UserLogin> => {
    const response = await http.get<UserLogin>(`/users/${id}`);
    return response.data;
  },
};
