import { api } from '@/config/axios.config';

export const InvoiceService = {
  async createInvoice(data: CreateInvoiceDto) {
    return await api.post<CreateInvoiceModel>('invoice', data);
  },
};
