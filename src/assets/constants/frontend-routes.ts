export const frontendRoutes = {
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/sign-up",
  SIGN_UP_USER_DETAILS: "/auth/sign-up/user-details",
  SIGN_UP_OTP: "/auth/sign-up/otp",
  RESET_PASSWORD: "/auth/reset-password",
  PASSWORD_EMAIL_SENT: "/auth/reset-password/check-your-email",
};

export const frontendProtectedRoutes = [
  frontendRoutes.SIGN_UP_OTP,
  frontendRoutes.SIGN_UP_USER_DETAILS,
];
