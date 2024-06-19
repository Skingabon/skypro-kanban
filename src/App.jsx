import React from "react";
import { AppRoutes } from "./AppRoutes/AppRoutes.jsx";
import { GlobalStyled } from "./global.styled.js";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyled />
      <AppRoutes />
    </>
  );
}

export default App;
