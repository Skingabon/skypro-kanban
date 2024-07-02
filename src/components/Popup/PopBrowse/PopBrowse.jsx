import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../../context/tasks.jsx";
import * as S from "./popBrowse.styled.js";
import Calendar from "../../Calendar/Calendar.jsx";
import { deleteCard, editCard } from "../../../Api/tasks.js";
import { UserContext } from "../../../context/user.jsx";
import { routes } from "../../../AppRoutes/routing.js";

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

  const colorList = {
    "Web design": "_orange",
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
  }, []);

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
      .catch((error) => {
        // TODO: сделать вывод ошибок пользователю/!!!!!!!!!!!!!!
        // console.log(error.message);
      });
  };

  const onDeleteCard = () => {
    deleteCard({ token: user.token, taskId: id })
      .then((res) => {
        setCards(res.tasks);
        navigate(routes.MAIN);
      })
      .catch((error) => {
        // TODO: сделать вывод ошибок пользователю/!!!!!!!!!!!!!!
        // console.log(error.message);
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
              <S.StatusP>Статус</S.StatusP>
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
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={card.readonly}
                    placeholder="Введите описание задачи..."
                    value={card.description}
                    onChange={onDescriptionChange}
                  ></textarea>
                </S.FormBrowsBlock>
              </S.PopBrowsForm>

              <Calendar selected={card.date} setSelected={onDateChange} />
            </S.PopBrowsWrap>
            {card.readonly ? (
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={() => setCard({ ...card, readonly: false })}
                  >
                    <a href="#">Редактировать задачу</a>
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={onDeleteCard}
                  >
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={onSaveCard}
                  >
                    <a href="#">Сохранить</a>
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={() => setCard({ ...card, readonly: true })}
                  >
                    <a href="#">Отменить</a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                    onClick={onDeleteCard}
                  >
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <a href="#">Закрыть</a>
                </button>
              </div>
            )}
          </S.PopBrowsContent>
        </S.PopBrowsBlock>
      </S.PopBrowsContainer>
    </S.PopBrowse>
  );
};

export default PopBrowse;
