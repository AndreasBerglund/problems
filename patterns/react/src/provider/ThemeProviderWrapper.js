import { createContext, useContext } from "react";
export const ThemeContext = createContext("light");

/**
 * A simple wrapper custom hook for consuming the theme provider context
 * Maybe its superfluous in this case...
 */
export function useThemeContext() {
  const theme = useContext(ThemeContext);
  return theme;
}

/**
 * A context provider provides state for child to consume
 */
export default function ThemeProviderWrapper({ children }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
