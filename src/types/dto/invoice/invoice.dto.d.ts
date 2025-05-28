declare interface CreateInvoiceDto {
  order_id: string;
  amount: string;
  currency?: string;
  payment_methods?: string[];
  site_account?: string;
  comment?: string;
  notification_url?: string;
  success_url?: string;
  fail_url?: string;
  metaDataPay?: string;
}
