import { AuthService } from '@/services/auth/AuthService';
import { useMutation } from '@tanstack/react-query';

export const KEY_LOGOUT = 'KEY_LOGOUT';

export const useLogout = (options?: MutationOptions<AuthModel, BasicErrorModel, AuthDto>) =>
  useMutation({
    mutationKey: [KEY_LOGOUT],
    mutationFn: (data) =>
      AuthService.logout({

      }),
    ...options,
  });
