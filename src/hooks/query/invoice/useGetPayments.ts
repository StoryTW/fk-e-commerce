import { InvoiceService } from '@/services/invoice/invoice.service';
import { useQuery } from '@tanstack/react-query';

export const KEY_GET_PAYMENTS = 'KEY_GET_PAYMENTS';

export const useGetPayments = (options?: QueryOptions<SuccessPaymentsModel, BasicErrorModel>) =>
  useQuery({
    queryKey: [KEY_GET_PAYMENTS],
    queryFn: () => InvoiceService.getPayments(),
    ...options,
  });
