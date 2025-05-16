import { InvoiceService } from '@/services/invoice/invoice.service';
import { useMutation } from '@tanstack/react-query';

export const KEY_CREATE_INVOICE = 'KEY_CREATE_INVOICE';

export const useCreateInvoice = (
  options?: MutationOptions<CreateInvoiceModel, BasicErrorModel, CreateInvoiceDto>,
) =>
  useMutation({
    mutationKey: [KEY_CREATE_INVOICE],
    mutationFn: (data) =>
      InvoiceService.createInvoice({
        order_id: data?.order_id,
        amount: data?.amount,
        comment: data?.comment,
        currency: data?.currency,
        fail_url: data?.fail_url,
        notification_url: data?.notification_url,
        site_account: data?.site_account,
        success_url: data?.success_url,
        payment_methods: data?.payment_methods,
      }),
    ...options,
  });