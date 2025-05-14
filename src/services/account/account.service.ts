import { api } from '@/config/axios.config';

export const AccountService = {
  async getUser() {
    return await api.get<UserModel>('/user');
  },
};