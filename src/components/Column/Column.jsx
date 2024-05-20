import Card from "../Card/Card.jsx";
import {CardsInCards, ColumnTitle, MainColumn} from "./column.js"



const Column = ({titleProps, cardList}) => {
    return (
        <MainColumn>
            <ColumnTitle>
                <p>{titleProps}</p>
            </ColumnTitle>
            <CardsInCards>
                {cardList.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                    />
                ))}


            </CardsInCards>
        </MainColumn>
    );
}
export default Column;