import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const lightTheme = {
    text: "#000000",
    bodyCard: "#FFFFFF",
    bodyApp: "#EAEEF6",
  };
  const darkTheme = {
    text: "#FFFFFF",
    bodyCard: "#20202C",
    bodyApp: "#151419",
  };
  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
