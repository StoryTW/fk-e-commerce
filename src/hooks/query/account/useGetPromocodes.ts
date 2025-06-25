import { AccountService } from '@/services/account/account.service';
import { useQuery } from '@tanstack/react-query';

export const KEY_GET_PROMOCODES = 'KEY_GET_PROMOCODES';

export const useGetPromocodes = (options?: QueryOptions<PromocodesListModel, BasicErrorModel>) =>
  useQuery({
    queryKey: [KEY_GET_PROMOCODES],
    queryFn: () => AccountService.getPromocodes(),
    ...options,
  });
