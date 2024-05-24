
import React, {useState} from "react";
import PopUser from "../Popup/PopUser/PopUser.jsx";
import {Container} from "../shared.styled.js";
import * as S from "./header.styled.js";

const Header = ({ onCardAdd }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = (event) => {
        event.preventDefault()
        setIsOpen((prevState) => !prevState)
    }

    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
                    </S.HeaderLogo>
                    <S.HeaderLogo>
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"/></a>
                    </S.HeaderLogo>
                    <S.HeaderNav>
                        <S.HeaderBtnMainNew onClick={onCardAdd}>
                            <a>Создать новую задачу</a>
                        </S.HeaderBtnMainNew>
                        <a href="" onClick={toggleDropDown} className="header__user _hover02">Ivan Ivanov</a>
                        {isOpen && <PopUser />}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>
    );
}

export default Header;