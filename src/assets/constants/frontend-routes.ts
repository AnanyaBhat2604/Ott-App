export const frontendRoutes = {
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/sign-up",
  SIGN_UP_USER_DETAILS: "/auth/sign-up/user-details",
  SIGN_UP_OTP: "/auth/sign-up/otp",
  RESET_PASSWORD: "/auth/reset-password",
  PASSWORD_EMAIL_SENT: "/auth/reset-password/check-your-email",
  DASHBOARD: "/",
};

export const frontendProtectedRoutes = [
  frontendRoutes.SIGN_UP_OTP,
  frontendRoutes.SIGN_UP_USER_DETAILS,
  frontendRoutes.RESET_PASSWORD,
  frontendRoutes.PASSWORD_EMAIL_SENT,
];

export const authRoutes = [
  frontendRoutes.SIGN_UP_OTP,
  frontendRoutes.SIGN_UP_USER_DETAILS,
  frontendRoutes.LOGIN,
  frontendRoutes.SIGN_UP,
  frontendRoutes.RESET_PASSWORD,
  frontendRoutes.PASSWORD_EMAIL_SENT,
];

export const protectedRoutes = [frontendRoutes.DASHBOARD];
