import AuthWrapper from "@/core/layouts/auth/AuthLayout";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthWrapper>{children}</AuthWrapper>;
};

export default AuthLayout;
