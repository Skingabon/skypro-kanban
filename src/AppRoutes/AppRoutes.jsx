import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage.jsx";
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx";
import { RegistrPage } from "../pages/RegistrPage/RegistrPage.jsx";
import { ExitPage } from "../pages/ExitPage/ExitPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage.jsx";
import { routes } from "./routing.js";
import PopBrowse from "../components/Popup/PopBrowse/PopBrowse.jsx";
import { NewCardPage } from "../pages/NewCardPage/NewCardPage.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={routes.MAIN} element={<MainPage />}>
          <Route path={routes.CARD} element={<PopBrowse />} />
          <Route path={routes.EXIT} element={<ExitPage />} />
          <Route path={routes.NEW} element={<NewCardPage />} />
        </Route>
      </Route>
      <Route path={routes.LOGIN} element={<LoginPage />} />
      <Route path={routes.REGISTER} element={<RegistrPage />} />
      <Route path={routes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
