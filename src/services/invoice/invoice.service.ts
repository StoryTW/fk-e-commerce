import { api } from '@/config/axios.config';

export const InvoiceService = {
  async createInvoice(data: CreateInvoiceDto) {
    return await api.post<CreateInvoiceModel>('invoice', data);
  },

  async paymentInfo(params: PaymentInfoDto) {
    return await api.get<PaymentInfoModel>('payment/status', params);
  },

  async getPayments() {
    return await api.get<any>('/invoices');
  },
};
