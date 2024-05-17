import Column from "../Column/Column.jsx";

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];


const Main = ( {cards} ) => {
    return (
        <main className="main">
            <div className="container">

                <div className="main__block">
                    <div className="main__content">
                        {statusList.map((status) => (
                            <Column
                                key={status}
                                titleProps={status}
                                cardList={cards.filter((card) => card.status === status)}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;