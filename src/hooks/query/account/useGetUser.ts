import { AccountService } from '@/services/account/account.service';
import { useQuery } from '@tanstack/react-query';

export const KEY_GET_USER = 'KEY_GET_USER';

export const useGetUser = (options?: QueryOptions<UserModel, BasicErrorModel>) =>
  useQuery({
    queryKey: [KEY_GET_USER],
    queryFn: () => AccountService.getUser(),
    ...options,
  });
