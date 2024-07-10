import Card from "../Card/Card.jsx";
import { CardsInCards, ColumnTitle, MainColumn } from "./column.styled.js";
import { Droppable } from "@hello-pangea/dnd";

const Column = ({ titleProps, cardList }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{titleProps}</p>
      </ColumnTitle>
      <Droppable droppableId={titleProps}>
        {(provided) => (
          <CardsInCards ref={provided.innerRef} {...provided.droppableProps}>
            {cardList.map((card, index) => (
              <Card key={card._id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </CardsInCards>
        )}
      </Droppable>
    </MainColumn>
  );
};
export default Column;
