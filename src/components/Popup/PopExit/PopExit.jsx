import { Link } from "react-router-dom";
import * as S from "./popExit.styled.js";
import { routes } from "../../../AppRoutes/routing.js";
import { useContext } from "react";
import { UserContext } from "../../../context/user.jsx";

const PopExit = () => {
  const { logout } = useContext(UserContext);
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>Выйти из аккаунта?</S.PopExitTtl>
          <form id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitFormYes id="exitYes" onClick={logout}>
                Выйти
              </S.PopExitFormYes>
              <S.PopExitNo>
                <Link to={routes.MAIN}>Нет, остаться</Link>
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default PopExit;
