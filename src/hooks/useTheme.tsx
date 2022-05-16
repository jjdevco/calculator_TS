import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "alternative";

interface ThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const themeContext = createContext<ThemeContext>(null!);

export function ThemeProvider({
  children,
}: {
  children?: React.ReactNode | Array<React.ReactNode>;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("useTheme() should be used within a ThemeProvider");
  }

  return context;
}
