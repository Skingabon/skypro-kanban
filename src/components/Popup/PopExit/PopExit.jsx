import { Link } from "react-router-dom";
import * as S from "./popExit.styled.js";
import { routes } from "../../../AppRoutes/routing.js";

const PopExit = ({ logout }) => {
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
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
