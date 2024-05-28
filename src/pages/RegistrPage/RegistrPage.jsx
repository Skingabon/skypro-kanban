import React from "react";
import * as S from "./registrPage.styled.js";
import { routes } from "../../AppRoutes/routing.js";
import { Link } from "react-router-dom";

export const RegistrPage = () => {
  return (
    <S.ContainerSignup>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtlH2>
            <h2>Регистрация.</h2>
          </S.ModalTtlH2>
          <S.ModalFormLogin id="formLogUp" action="#">
            <S.ModalInput
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя"
            />
            <S.ModalInput
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter id="SignUpEnter">
              <Link to={routes.MAIN}>Зарегистрироваться</Link>
            </S.ModalBtnEnter>
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
