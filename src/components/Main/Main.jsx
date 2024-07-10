import Column from "../Column/Column.jsx";
import * as S from "./main.styled.js";
import { Container } from "../shared.styled.js";
import { DragDropContext } from "@hello-pangea/dnd";
import { useContext } from "react";
import { TasksContext } from "../../context/tasks.jsx";
import { UserContext } from "../../context/user.jsx";
import { editCard } from "../../Api/tasks.js";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = ({ cards }) => {
  const { user } = useContext(UserContext);
  const { setCards } = useContext(TasksContext);

  let newCard = {};
  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let newCards = Object.values(cards).map((el) => {
      if (el._id === draggableId) {
        newCard = { ...el, status: destination.droppableId };
        return newCard;
      }
      return el;
    });
    setCards(newCards);
    editCard({ token: user.token, task: newCard }).then((cards) => {
      setCards(cards.tasks);
    });
  };

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            <DragDropContext onDragEnd={onDragEnd}>
              {statusList.map((status) => (
                <Column
                  key={status}
                  titleProps={status}
                  cardList={cards.filter((card) => card.status === status)}
                />
              ))}
            </DragDropContext>
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};

export default Main;
