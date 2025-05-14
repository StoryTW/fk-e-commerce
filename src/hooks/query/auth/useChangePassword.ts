import { AuthService } from '@/services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';

export const KEY_CHANGE_PASSWORD = 'KEY_CHANGE_PASSWORD';

export const useChangePassword = (
  options?: MutationOptions<ChangePasswordModel, BasicErrorModel, ChangePasswordDto>,
) =>
  useMutation({
    mutationKey: [KEY_CHANGE_PASSWORD],
    mutationFn: (data) =>
      AuthService.changePassword({
        old_password: data.old_password,
        new_password: data.new_password,
      }),
    ...options,
  });
