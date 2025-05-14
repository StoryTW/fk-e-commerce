import { AuthService } from '@/services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';

export const KEY_SIGN_IN = 'KEY_SIGN_IN';

export const useSignIn = (options?: MutationOptions<SignInModel, BasicErrorModel, SignInDto>) =>
  useMutation({
    mutationKey: [KEY_SIGN_IN],
    mutationFn: (data) =>
      AuthService.signIn({
        email: data.email,
        password: data.password,
      }),
    ...options,
  });
