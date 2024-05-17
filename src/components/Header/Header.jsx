
import React, {useState} from "react";
import PopUser from "../Popup/PopUser/PopUser.jsx";

const Header = ({ onCardAdd }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = (event) => {
        event.preventDefault()
        setIsOpen((prevState) => !prevState)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo _show _light">
                        <a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"/></a>
                    </div>
                    <nav className="header__nav">
                        <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={onCardAdd}><a>Создать новую
                            задачу</a></button>
                        <a href="" onClick={toggleDropDown} className="header__user _hover02">Ivan Ivanov</a>
                        {isOpen && <PopUser />}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;