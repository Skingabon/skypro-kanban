import React, { useState } from "react";
import * as S from "./registrPage.styled.js";
import { routes } from "../../AppRoutes/routing.js";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../../Api/tasks.js";
// на основе логина
export const RegistrPage = ({ regUser }) => {
  const navigate = useNavigate();
  const [regForm, setregForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, serError] = useState(null);

  const inputRegChange = (event) => {
    const { name, value } = event.target;
    setregForm({ ...regForm, [name]: value });
  };

  const onReg = async (event) => {
    event.preventDefault();

    if (!regForm.name) {
      serError("Укажите имя");
      return;
    }
    if (!regForm.email) {
      serError("Укажите пароль");
      return;
    }
    if (!regForm.password) {
      serError("Укажите пароль");
      return;
    }
    try {
      const response = await registerApi({
        name: regForm.name,
        login: regForm.email,
        password: regForm.password,
      });
      console.log("LOGIN RESPONSE", response);
      regUser(response.user);
      navigate(routes.MAIN);
    } catch (error) {
      console.error(error.message);
      if (error.message === "Failed to fetch") {
        serError("Ошибка соединения");
      }
    }
  };

  return (
    <S.ContainerSignup>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtlH2>
            <h2>Регистрация.</h2>
          </S.ModalTtlH2>
          <S.ModalFormLogin id="formLogUp" action="#" onSubmit={onReg}>
            <S.ModalInput
              type="text"
              name="name"
              id="first-name"
              placeholder="Имя"
              value={regForm.name}
              onChange={inputRegChange}
            />
            <S.ModalInput
              type="text"
              name="email"
              id="loginReg"
              placeholder="Эл. почта"
              value={regForm.email}
              onChange={inputRegChange}
            />
            <S.ModalInput
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              value={regForm.password}
              onChange={inputRegChange}
            />
            <S.ModalBtnEnter id="SignUpEnter" type="submit">
              <S.ModalLink>Зарегистрироваться</S.ModalLink>
            </S.ModalBtnEnter>
            {error && <p>{error}</p>}
            <S.ModalFormGroup>
              <S.ModalFormGroupP>
                Уже есть аккаунт?{" "}
                <S.ModalFormGroupA to={routes.LOGIN}>
                  Войдите здесь
                </S.ModalFormGroupA>
              </S.ModalFormGroupP>
            </S.ModalFormGroup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignup>
  );
};
