import React, { useEffect, useState } from "react";
import { cardList } from "../../data.js";
import { GlobalStyled } from "../../global.styled.js";
import { Loader, Wrapper } from "../../app.styled.js";
import PopNewCard from "../../components/Popup/PopNewCard/PopNewCard.jsx";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  function onCardAdd() {
    const newTask = {
      id: cards.length + 1,
      topic: "Web design",
      title: "Новая задача 1",
      date: "05.06.2024",
      status: "Без статуса",
    };
    setCards([...cards, newTask]);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <Outlet />

        <PopNewCard />
        <Header onCardAdd={onCardAdd} />
        {!isLoading ? (
          <Main cards={cards} />
        ) : (
          <Loader>Данные загружаются</Loader>
        )}
      </Wrapper>
    </>
  );
};
