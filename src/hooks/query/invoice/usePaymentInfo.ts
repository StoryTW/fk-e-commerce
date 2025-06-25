import { InvoiceService } from '@/services/invoice/invoice.service';
import { useQuery } from '@tanstack/react-query';

export const KEY_PAYMENT_INFO = 'KEY_PAYMENT_INFO';

export const usePaymentInfo = (
  order_id: PaymentInfoDto['order_id'],
  options?: QueryOptions<PaymentInfoModel, BasicErrorModel>,
) =>
  useQuery({
    queryKey: [KEY_PAYMENT_INFO],
    queryFn: () =>
      InvoiceService.paymentInfo({
        order_id: order_id,
      }),
    ...options,
  });
