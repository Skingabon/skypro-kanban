import {Link, useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {TasksContext} from "../../../context/tasks.jsx";
import * as S from "./popBrowse.styled.js";

const PopBrowse = () => {
    const {id} = useParams();
    const {cards} = useContext(TasksContext);
    const [card, setCard] = useState({
        title: "",
        topic: "",
        status: "Без статуса",
        description: "",
        date: new Date(),
        readonly: true,
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
        <S.PopBrowse>
            <S.PopBrowsContainer>
                <S.PopBrowsBlock>
                    <S.PopBrowsContent>
                        <S.PopBrowsTopBlock>
                            <S.PopBrowsTtl>{findCard.title}</S.PopBrowsTtl>
                            <S.CardTopic $topicColor={colorList[findCard.topic] || ""}>
                                <p>{findCard.topic}</p>
                            </S.CardTopic>
                        </S.PopBrowsTopBlock>
                        <S.PopBrowsStatus>
                            <S.StatusP>Статус</S.StatusP>

                            <S.StatusThemes>
                                {
                                    card.readonly
                                        ? <S.StatusTheme $active={true}>
                                            <p className="_gray">
                                                {findCard.status}
                                            </p>
                                        </S.StatusTheme>
                                        : (statusList.map((status) => (
                                            <S.StatusTheme
                                                key={status}
                                                $active={status === findCard.status}
                                            >
                                                <p className="_gray">
                                                    {status}
                                                </p>
                                            </S.StatusTheme>
                                        )))
                                }
                                {/*{statusList.map((status) => (*/}
                                {/*    <S.StatusTheme*/}
                                {/*        $active={status === findCard.status}*/}
                                {/*        key={status}*/}
                                {/*    >*/}
                                {/*        <p className={status === findCard.status ? "_gray" : ""}>*/}
                                {/*            {status}*/}
                                {/*        </p>*/}
                                {/*    </S.StatusTheme>*/}
                                {/*))}*/}
                            </S.StatusThemes>
                        </S.PopBrowsStatus>
                        <S.PopBrowsWrap>
                            <S.PopBrowsForm
                                action="#"
                            >
                                <S.FormBrowsBlock>
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
                                </S.FormBrowsBlock>
                            </S.PopBrowsForm>
                            {/*<Calendar />*/}
                        </S.PopBrowsWrap>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        <div className="pop-browse__btn-browse ">
                            <div className="btn-group">
                                <button className="btn-browse__edit _btn-bor _hover03"
                                        onClick={() => setCard({...card, readonly: false})}
                                >
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
                    </S.PopBrowsContent>
                </S.PopBrowsBlock>
            </S.PopBrowsContainer>
        </S.PopBrowse>
    );
};

export default PopBrowse;
