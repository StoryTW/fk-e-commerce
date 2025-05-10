import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { ChangePasswordPage } from '@/pageComponents/ChangePasswordPage/ChangePasswordPage';

export default function ChangePassword() {
  return (
    <AccountPageLayout title='Изменить пароль'>
      <ChangePasswordPage />
    </AccountPageLayout>
  );
}
