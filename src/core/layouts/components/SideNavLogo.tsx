import useMounted from "@/core/hooks/useMounted";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const getLogo = (theme?: string) => {
  if (theme === "light") {
    return "/images/logo-landscape-light.png";
  }
  return "/images/logo-landscape-dark.png";
};

const SideNavLogo = () => {
  const { theme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }

  const src = getLogo(theme);

  return (
    <Link href={"/dashboard"}>
      <Image alt='logo landscape' className='logo-landscape' width={150} height={55} src={src} priority />
    </Link>
  );
};

export default SideNavLogo;
