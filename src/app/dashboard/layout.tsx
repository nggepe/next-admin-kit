import LayoutWrapper from "@/core/layouts/LayoutWrapper";

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
}
