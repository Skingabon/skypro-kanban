import React from "react";
import { AppRoutes } from "./AppRoutes/AppRoutes.jsx";
import { GlobalStyled } from "./global.styled.js";
import "./App.css";
import { TaskProvider } from "./context/tasks.jsx";
import { UserProvider } from "./context/user.jsx";

function App() {
  return (
    <>
      <TaskProvider>
        <UserProvider>
          <GlobalStyled />
          <AppRoutes />
        </UserProvider>
      </TaskProvider>
    </>
  );
}

export default App;
