import React, { useEffect, useState } from "react";
import { cardList } from "../../data.js";
import { GlobalStyled } from "../../global.styled.js";
import { Loader, Wrapper } from "../../app.styled.js";
import PopNewCard from "../../components/Popup/PopNewCard/PopNewCard.jsx";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../Api/tasks.js";

export const MainPage = ({ setAuth, setUser, user }) => {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    setIsLoading(true);

    getTasks().then((data) => {
      setTasks(data);
    });
    setIsLoading(false);
  }, []);
  console.log(tasks);

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

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <Outlet />

        <PopNewCard />
        <Header onCardAdd={onCardAdd} />
        {!isLoading ? (
          <Main tasks={tasks} cards={cards} />
        ) : (
          <Loader>Данные загружаются</Loader>
        )}
      </Wrapper>
    </>
  );
};
