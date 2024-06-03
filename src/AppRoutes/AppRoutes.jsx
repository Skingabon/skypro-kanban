import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage.jsx";
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx";
import { RegistrPage } from "../pages/RegistrPage/RegistrPage.jsx";
import { ExitPage } from "../pages/ExitPage/ExitPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage.jsx";
import { routes } from "./routing.js";
import PopBrowse from "../components/Popup/PopBrowse/PopBrowse.jsx";
import { useState } from "react";
import { NewCardPage } from "../pages/NewCardPage/NewCardPage.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import { useNavigate } from "react-router-dom";

export const AppRoutes = () => {
  const [user, setUser] = useState(localStorage.getItem("token"));
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();

  // const login = (event) => {
  //   event.preventDefault();
  //   setAuth(true);
  //   navigate(routes.MAIN);
  // };

  const logout = (event) => {
    event.preventDefault();
    setAuth(false);
    navigate(routes.LOGIN);
  };

  return (
    <Routes>
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route
          path={routes.MAIN}
          element={<MainPage setAuth={setAuth} user={user} setUser={setUser} />}
        >
          <Route path={routes.CARD} element={<PopBrowse />} />
          <Route path={routes.EXIT} element={<ExitPage logout={logout} />} />
          <Route path={routes.NEW} element={<NewCardPage />} />
        </Route>
      </Route>
      <Route
        path={routes.LOGIN}
        element={<LoginPage setUser={setUser} setAuth={setAuth} />}
      />
      <Route path={routes.REGISTER} element={<RegistrPage />} />
      <Route path={routes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
