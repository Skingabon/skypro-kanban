import { Link } from "react-router-dom";
import { PopExitContainer } from "./popExit.styled.js";

const PopExit = ({ logout }) => {
  return (
    <PopExit id="popExit">
      <PopExitContainer>
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
                onClick={logout}
              >
                Выйти
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to="/">Нет, остаться</Link>
              </button>
            </div>
          </form>
        </div>
      </PopExitContainer>
    </PopExit>
  );
};

export default PopExit;
