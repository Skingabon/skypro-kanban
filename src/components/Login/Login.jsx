import {
  ContainerSign,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormGroupA,
  ModalFormGroupP,
  ModalFormLogin,
  ModalInput,
  ModalLink,
  ModalTtlH2,
} from "./login.styled.js";
import { routes } from "../../AppRoutes/routing.js";
import { useState } from "react";
import { loginApi } from "../../Api/tasks.js";
import { useNavigate } from "react-router-dom";

const Login = ({ loginUser }) => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, serError] = useState(null);

  const inputLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();

    if (!loginForm.email) {
      serError("Укажите почту");
      return;
    }
    if (!loginForm.password) {
      serError("Укажите пароль");
      return;
    }
    try {
      const response = await loginApi({
        login: loginForm.email,
        password: loginForm.password,
      });
      console.log("LOGIN RESPONSE", response);
      loginUser(response.user);
      navigate(routes.MAIN);
    } catch (error) {
      console.error(error.message);
      if (error.message === "Failed to fetch") {
        serError("Ошибка соединения");
      }
    }
  };

  return (
    <>
      <ContainerSign>
        <Modal>
          <ModalBlock>
            <ModalTtlH2>
              <h2>Вход</h2>
            </ModalTtlH2>
            <ModalFormLogin id="formLogIn" action="#" onSubmit={onLogin}>
              <ModalInput
                type="text"
                name="email"
                id="formlogin"
                placeholder="Эл. почта"
                value={loginForm.email}
                onChange={inputLoginChange}
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={loginForm.password}
                onChange={inputLoginChange}
              />
              <ModalBtnEnter id="btnEnter" type="submit">
                <ModalLink>Войти</ModalLink>
              </ModalBtnEnter>
              {error && <p>{error}</p>}
              <ModalFormGroup>
                <ModalFormGroupP>Нужно зарегистрироваться?</ModalFormGroupP>
                <ModalFormGroupA to={routes.REGISTER}>
                  Регистрируйтесь здесь
                </ModalFormGroupA>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSign>
      ;
    </>
  );
};

export default Login;
