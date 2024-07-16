import React, { useContext, useEffect, useState } from "react";
import { GlobalStyled } from "../../global.styled.js";
import { Loader, Wrapper } from "../../app.styled.js";
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../Api/tasks.js";
import { UserContext } from "../../context/user.jsx";
import { TasksContext } from "../../context/tasks.jsx";

export const MainPage = () => {
  const { user } = useContext(UserContext);
  const { cards, setCards } = useContext(TasksContext);
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

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <Outlet />
        <Header user={user} />
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
