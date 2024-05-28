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

const Login = ({ login }) => {
  return (
    <>
      <ContainerSign>
        <Modal>
          <ModalBlock>
            <ModalTtlH2>
              <h2>Вход</h2>
            </ModalTtlH2>
            <ModalFormLogin id="formLogIn" action="#" onSubmit={login}>
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <ModalBtnEnter id="btnEnter" type="submit">
                <ModalLink>Войти</ModalLink>
              </ModalBtnEnter>
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
