import { useThemeContext } from "./ThemeProviderWrapper";

export default function ConsumerOfTheme() {
  const theme = useThemeContext();
  return <div>I know the theme is... : {theme} !!!</div>;
}
