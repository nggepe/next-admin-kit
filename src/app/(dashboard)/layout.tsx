import DashboardWrapper from "@/core/layouts/dashboard/DashboardLayout";

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardWrapper>{children}</DashboardWrapper>
    </>
  );
}
