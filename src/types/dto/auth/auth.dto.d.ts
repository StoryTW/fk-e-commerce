declare interface SignUpDto {
  name: string;
  email: string;
  password: string;
}

declare interface SignInDto {
  email: string;
  password: string;
}

declare interface ChangePasswordDto {
  old_password: string;
  new_password: string;
}
