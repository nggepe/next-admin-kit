export type ThemePreferences = "light" | "dark" | "system";

export interface ThemeConfig {
  theme: ThemePreferences;
  cookieName: string;
}

export const themeConfig: ThemeConfig = {
  theme: "system",
  cookieName: "theme"
};
