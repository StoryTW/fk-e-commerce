import { apiInvoice } from '@/config/axiosInvoice.config';

export const InvoiceService = {
  async createInvoice(data: CreateInvoiceDto, metaDataPay: string) {
    return await apiInvoice.post<CreateInvoiceModel>('invoices', data, {
      'Meta-Data': metaDataPay,
    });
  },
};
