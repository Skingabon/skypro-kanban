import Card from "../Card/Card.jsx";



const Column = ({titleProps, cardList}) => {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{titleProps}</p>
            </div>
            <div className="cards">
                {cardList.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                    />
                ))}


            </div>
        </div>
    );
}
export default Column;