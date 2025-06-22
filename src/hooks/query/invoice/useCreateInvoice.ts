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
        amount: data?.amount,
        email: data?.email,
        games: data?.games,
      }),
    ...options,
  });
