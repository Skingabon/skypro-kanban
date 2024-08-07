import React, { useState } from "react";
import PopUser from "../Popup/PopUser/PopUser.jsx";
import { Container } from "../shared.styled.js";
import * as S from "./header.styled.js";
import { Link } from "react-router-dom";
import { routes } from "../../AppRoutes/routing.js";

const Header = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = (event) => {
    event.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to={routes.MAIN} target="_self">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew to={routes.NEW}>
              Создать новую задачу
            </S.HeaderBtnMainNew>
            <S.HeaderUser href="" onClick={toggleDropDown}>
              {user.name}
            </S.HeaderUser>
            {isOpen && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
