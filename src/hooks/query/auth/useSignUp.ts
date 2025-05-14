import { AuthService } from '@/services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';

export const KEY_SIGN_UP = 'KEY_SIGN_UP';

export const useSignUp = (options?: MutationOptions<SignUpModel, BasicErrorModel, SignUpDto>) =>
  useMutation({
    mutationKey: [KEY_SIGN_UP],
    mutationFn: (data) =>
      AuthService.signUp({
        email: data.email,
        name: data.name,
        password: data.password,
      }),
    ...options,
  });
