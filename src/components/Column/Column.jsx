import Card from "../Card/Card.jsx";
import { CardsInCards, ColumnTitle, MainColumn } from "./column.styled.js";

const Column = ({ titleProps, cardList }) => {
  console.log(cardList);
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{titleProps}</p>
      </ColumnTitle>
      <CardsInCards>
        {cardList.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </CardsInCards>
    </MainColumn>
  );
};
export default Column;
