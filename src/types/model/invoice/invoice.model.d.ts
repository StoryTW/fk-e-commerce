declare interface CreateInvoiceModel {
  payment_url: string;
}

declare interface PaymentInfoModel {
  status: 'paid' | 'pending';
  price: string;
}

declare interface SuccessPaymentsModel {
  invoices: SuccessPaymentItemModel[];
}

declare interface SuccessPaymentItemModel {
  id: number;
  order_id: string;
  user_id: number;
  games: string;
  email: string;
  amount: string;
  status: 'paid' | 'pending';
  created_at: string;
  updated_at: string;
}
