import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { TasksContext } from "../../../context/tasks.jsx";
import * as S from "./popBrowse.styled.js";

const PopBrowse = () => {
  const { id } = useParams();
  const { cards } = useContext(TasksContext);
  const [card, setCard] = useState({
    title: "",
    topic: "",
    status: "Без статуса",
    description: "",
    date: new Date(),
  });

  const colorList = {
    "Web design": "_orange",
    Research: "_green",
    Copywriting: "_purple",
  };

  // useEffect(() => {
  //   const findCard = cards.find((el) => el._id === id);
  //   // setCard(card.)
  // }, []);

  const findCard = cards.find((el) => el._id === id);
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{findCard.title}</h3>
              <S.CardTopic $topicColor={colorList[findCard.topic] || ""}>
                <p>{findCard.topic}</p>
              </S.CardTopic>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>

              <div className="status__themes">
                {statusList.map((status) => (
                  <div
                    key={status}
                    className={`status__theme ${status === findCard.status ? "_gray" : "_hide"}`}
                  >
                    <p className={status === findCard.status ? "_gray" : ""}>
                      {status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  >
                    {findCard.description}
                  </textarea>
                </div>
              </form>
              {/*<Calendar />*/}
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
