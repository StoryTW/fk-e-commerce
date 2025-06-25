declare interface CreateInvoiceModel {
  payment_url: string;
}

declare interface PaymentInfoModel {
  status: 'paid' | 'pending';
  price: string;
}
