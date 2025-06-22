import { AccountService } from '@/services/account/account.service';
import { useMutation } from '@tanstack/react-query';

export const KEY_CREATE_PROMOCODE = 'KEY_CREATE_PROMOCODE';

export const useCreatePromocode = (
  options?: MutationOptions<any, BasicErrorModel, CreatePromocodeDto>,
) =>
  useMutation({
    mutationKey: [KEY_CREATE_PROMOCODE],
    mutationFn: (data) =>
      AccountService.createPromocode({
        name: data.name,
        percent: data.percent,
      }),
    ...options,
  });
