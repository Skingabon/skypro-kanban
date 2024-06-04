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

const getLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (_) {
    return null;
  }
};

export const AppRoutes = () => {
  const [user, setUser] = useState(getLocalStorage());
  const navigate = useNavigate();

  const loginUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate(routes.MAIN);
  };

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("user");
    setUser(null);
    navigate(routes.LOGIN);
  };

  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} />}>
        <Route
          path={routes.MAIN}
          element={<MainPage user={user} setUser={setUser} />}
        >
          <Route path={routes.CARD} element={<PopBrowse />} />
          <Route path={routes.EXIT} element={<ExitPage logout={logout} />} />
          <Route path={routes.NEW} element={<NewCardPage />} />
        </Route>
      </Route>
      <Route
        path={routes.LOGIN}
        element={<LoginPage loginUser={loginUser} />}
      />
      <Route path={routes.REGISTER} element={<RegistrPage />} />
      <Route path={routes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
