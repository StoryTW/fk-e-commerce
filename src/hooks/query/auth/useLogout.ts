import { AuthService } from '@/services/auth/AuthService';
import { useMutation } from '@tanstack/react-query';

export const KEY_LOGOUT = 'KEY_LOGOUT';

export const useLogout = (options?: MutationOptions<LogoutModel, BasicErrorModel>) =>
  useMutation({
    mutationKey: [KEY_LOGOUT],
    mutationFn: () => AuthService.logout(),
    ...options,
  });
