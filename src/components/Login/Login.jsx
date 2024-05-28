import {
  ContainerSign,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormLogin,
  ModalInput,
  ModalTtlH2,
} from "./login.styled.js";
import { Link } from "react-router-dom";

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
                Войти
              </ModalBtnEnter>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to="/">Регистрируйтесь здесь</Link>
              </div>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSign>
      ;
    </>
  );
};

export default Login;
