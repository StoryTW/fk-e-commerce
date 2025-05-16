import { apiInvoice } from '@/config/axiosInvoice.config';

export const InvoiceService = {
  async createInvoice(data: CreateInvoiceDto) {
    return await apiInvoice.post<CreateInvoiceModel>('invoices', data);
  },
};