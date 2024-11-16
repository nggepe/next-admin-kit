import useMounted from "@/core/hooks/useMounted";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const SideNavLogo = () => {
  const { theme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }

  const src = theme === "light" ? "/images/logo-landscape-light.png" : "/images/logo-landscape-dark.png";

  return (
    <Link href={"/dashboard"}>
      <Image alt='logo' style={{ width: "150px" }} className='mx-auto' src={src} />
    </Link>
  );
};

export default SideNavLogo;
