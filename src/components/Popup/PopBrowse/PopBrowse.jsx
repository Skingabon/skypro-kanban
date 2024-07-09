import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../../context/tasks.jsx";
import * as S from "./popBrowse.styled.js";
import Calendar from "../../Calendar/Calendar.jsx";
import { deleteCard, editCard } from "../../../Api/tasks.js";
import { UserContext } from "../../../context/user.jsx";
import { routes } from "../../../AppRoutes/routing.js";
import { ErrorText } from "../../shared.styled.js";

const PopBrowse = () => {
  const { id } = useParams();
  const { cards, setCards } = useContext(TasksContext);
  const { user } = useContext(UserContext);
  const [card, setCard] = useState({
    title: "",
    topic: "",
    status: "Без статуса",
    description: "",
    date: new Date(),
    readonly: true,
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const colorList = {
    "Web Design": "_orange",
    Research: "_green",
    Copywriting: "_purple",
  };

  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const findCard = cards.find((el) => el._id === id);
    setCard({ ...findCard, readonly: true, date: new Date(findCard.date) });
  }, [id, cards]);

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setCard({ ...card, description });
  };

  const onDateChange = (date) => {
    if (card.readonly) return;
    setCard({ ...card, date });
  };

  const onSaveCard = () => {
    editCard({ token: user.token, task: card })
      .then((res) => {
        setCards(res.tasks);
        setCard({ ...card, readonly: true });
      })
      .catch(() => {
        setError("Что-то пошло не так, попробуйте позже");
      });
  };

  const onDeleteCard = () => {
    deleteCard({ token: user.token, taskId: id })
      .then((res) => {
        setCards(res.tasks);
        navigate(routes.MAIN);
      })
      .catch(() => {
        setError("Что-то пошло не так, попробуйте позже");
      });
  };

  return (
    <S.PopBrowse>
      <S.PopBrowsContainer>
        <S.PopBrowsBlock>
          <S.PopBrowsContent>
            <S.PopBrowsTopBlock>
              <S.PopBrowsTtl>{card.title}</S.PopBrowsTtl>
              <S.CardTopic $topicColor={colorList[card.topic] || ""}>
                <p>{card.topic}</p>
              </S.CardTopic>
            </S.PopBrowsTopBlock>
            <S.PopBrowsStatus>
              <S.PopTitle>Статус</S.PopTitle>
              <S.StatusThemes>
                {card.readonly ? (
                  <S.StatusTheme $active={true}>
                    <p className="_gray">{card.status}</p>
                  </S.StatusTheme>
                ) : (
                  statusList.map((status) => (
                    <S.StatusTheme
                      onClick={() => {
                        setCard({ ...card, status });
                      }}
                      key={status}
                      $active={status === card.status}
                    >
                      <p className="_gray">{status}</p>
                    </S.StatusTheme>
                  ))
                )}
              </S.StatusThemes>
            </S.PopBrowsStatus>
            <S.PopBrowsWrap>
              <S.PopBrowsForm action="#">
                <S.FormBrowsBlock>
                  <S.PopTitle>Описание задачи</S.PopTitle>
                  <S.FormBrowseArea
                    readOnly={card.readonly}
                    $readOnly={card.readonly}
                    placeholder="Введите описание задачи..."
                    value={card.description}
                    onChange={onDescriptionChange}
                  ></S.FormBrowseArea>
                </S.FormBrowsBlock>
              </S.PopBrowsForm>

              <Calendar selected={card.date} setSelected={onDateChange} />
            </S.PopBrowsWrap>
            {error && <ErrorText>{error}</ErrorText>}
            {card.readonly ? (
              <S.PopBrowseBtn>
                <S.BtnGroup>
                  <S.PopBrowseBtnEdit
                    onClick={() => setCard({ ...card, readonly: false })}
                  >
                    <a href="#">Редактировать задачу</a>
                  </S.PopBrowseBtnEdit>
                  <S.PopBrowseDelete onClick={onDeleteCard}>
                    <a href="#">Удалить задачу</a>
                  </S.PopBrowseDelete>
                </S.BtnGroup>
                <S.PopBrowseClose>
                  <Link to="/">Закрыть</Link>
                </S.PopBrowseClose>
              </S.PopBrowseBtn>
            ) : (
              <S.PopBrowseEditGroup>
                <S.BtnGroup>
                  <S.PopBrowseEdit01 onClick={onSaveCard}>
                    <a href="#">Сохранить</a>
                  </S.PopBrowseEdit01>
                  <S.PopBrowseEdit03
                    onClick={() => setCard({ ...card, readonly: true })}
                  >
                    <a href="#">Отменить</a>
                  </S.PopBrowseEdit03>
                  <S.PopBrowseDelete onClick={onDeleteCard}>
                    <a href="#">Удалить задачу</a>
                  </S.PopBrowseDelete>
                </S.BtnGroup>
                <S.PopBrowseClose>
                  <Link to={routes.MAIN}>Закрыть</Link>
                </S.PopBrowseClose>
              </S.PopBrowseEditGroup>
            )}
          </S.PopBrowsContent>
        </S.PopBrowsBlock>
      </S.PopBrowsContainer>
    </S.PopBrowse>
  );
};

export default PopBrowse;
