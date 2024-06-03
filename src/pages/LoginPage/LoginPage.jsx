import Login from "../../components/Login/Login.jsx";

export const LoginPage = ({ loginProps, setUser, setAuth }) => {
  return <Login setUser={setUser} setAuth={setAuth} login={loginProps} />;
};
