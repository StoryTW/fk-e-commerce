export const AuthFrameEnum = {
  LOGIN: 0,
  REGISTER: 1,
} as const;

export type AuthFrameEnum = (typeof AuthFrameEnum)[keyof typeof AuthFrameEnum];