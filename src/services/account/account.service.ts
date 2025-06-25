import { api } from '@/config/axios.config';

export const AccountService = {
  async getUser() {
    return await api.get<UserModel>('/user');
  },

  async getPromocodes() {
    return await api.get<PromocodesListModel>('/promocodes');
  },

  async createPromocode(data: CreatePromocodeDto) {
    return await api.post<any>('/create/promocode', data);
  },
};
