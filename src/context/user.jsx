import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../AppRoutes/routing.js";

export const UserContext = createContext(null);

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
}

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser());
  const login = (userResp) => {
    setUser(userResp);
    localStorage.setItem("user", JSON.stringify(userResp));
    navigate(routes.MAIN);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate(routes.LOGIN);
  };

  return (
    <UserContext.Provider value={{ login, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};
