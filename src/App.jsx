import React from "react";
import { AppRoutes } from "./AppRoutes/AppRoutes.jsx";
import { GlobalStyled } from "./global.styled.js";
import "./App.css";
import { TaskProvider } from "./context/tasks.jsx";
import { UserProvider } from "./context/user.jsx";
import { ThemeContextProvider } from "./context/theme.jsx";

function App() {
  return (
    <>
      <TaskProvider>
        <UserProvider>
          <ThemeContextProvider>
            <GlobalStyled />
            <AppRoutes />
          </ThemeContextProvider>
        </UserProvider>
      </TaskProvider>
    </>
  );
}

export default App;
