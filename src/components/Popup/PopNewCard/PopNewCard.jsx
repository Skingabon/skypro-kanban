import Calendar from "../../Calendar/Calendar.jsx";
import { routes } from "../../../AppRoutes/routing.js";
import * as S from "./popNewCard.styled.js";
import { addCard } from "../../../Api/tasks.js";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/user.jsx";
import { TasksContext } from "../../../context/tasks.jsx";
import { useNavigate } from "react-router-dom";
import { ErrorText } from "../../shared.styled.js";

const PopNewCard = () => {
  const { user } = useContext(UserContext);
  const { setCards } = useContext(TasksContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);
  const [task, setTask] = useState({
    title: "",
    topic: "",
    status: "Без статуса",
    description: "",
  });

  function onAddCard() {
    if (!task.title || !task.description || !selected || !task.topic) {
      setError("Заполните все поля");
      return;
    }
    const newTask = {
      ...task,
      date: selected,
    };

    addCard({ task: newTask, token: user.token })
      .then((res) => {
        setCards(res.tasks);
        navigate(routes.MAIN);
      })
      .catch(() => {
        setError("Что-то пошло не так, попробуйте позже");
      });
  }

  const category = [
    { name: "Web Design", color: "_orange" },
    { name: "Research", color: "_green" },
    { name: "Copywriting", color: "_purple" },
  ];

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.CloseCard to={routes.MAIN}>&#10006;</S.CloseCard>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.PopNewCardSubttl htmlFor="formTitle">
                    Название задачи
                  </S.PopNewCardSubttl>
                  <S.PopNewCardFormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                    onChange={(e) =>
                      setTask({ ...task, title: e.target.value })
                    }
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.PopNewCardSubttl htmlFor="textArea">
                    Описание задачи
                  </S.PopNewCardSubttl>
                  <S.FormNewArea
                    placeholder="Введите описание задачи..."
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopNewCardWrap>
            <S.PopNewCardCatecory>
              <S.CategorysP>Категория</S.CategorysP>
              <S.CategorysThemes>
                {category.map((el, i) => (
                  <div key={i}>
                    <S.CategorysTheme
                      $isActive={el.name === task.topic}
                      onClick={() => setTask({ ...task, topic: el.name })}
                      $topicColor={el.color}
                      htmlFor={`radio${i}`}
                    >
                      {el.name}
                    </S.CategorysTheme>
                    <S.PopNewCategory
                      type="radio"
                      id={`radio${i}`}
                      name="radio"
                    />
                  </div>
                ))}
              </S.CategorysThemes>
            </S.PopNewCardCatecory>
            {error && <ErrorText>{error}</ErrorText>}
            <S.PopNewCardBtn onClick={onAddCard}>
              Создать задачу
            </S.PopNewCardBtn>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCard;
