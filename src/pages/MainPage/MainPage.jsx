import React, { useEffect, useState } from "react";
import { GlobalStyled } from "../../global.styled.js";
import { Loader, Wrapper } from "../../app.styled.js";
import PopNewCard from "../../components/Popup/PopNewCard/PopNewCard.jsx";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../Api/tasks.js";

export const MainPage = ({ user }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getTasks({ token: user.token })
      .then((data) => {
        setCards(data.tasks);
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          return setError("Не удалось загрузить данные, попробуйте позже");
        }
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

  console.log(error);

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <Outlet />

        <PopNewCard />
        <Header onCardAdd={onCardAdd} user={user} />
        {!isLoading ? (
          <Main cards={cards} />
        ) : (
          <Loader>Данные загружаются</Loader>
        )}
        {error && error}
      </Wrapper>
    </>
  );
};
