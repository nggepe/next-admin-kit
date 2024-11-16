"use client";
import { Button } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import useMounted from "@/core/hooks/useMounted";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null; // Avoid rendering on server side

  return (
    <Button variant='surface' aria-label='ThemeToggle' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "light" ? <SunIcon aria-label='Theme is light' /> : <MoonIcon aria-label='Theme is dark' />}
    </Button>
  );
};

export default ThemeToggle;
