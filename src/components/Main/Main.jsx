import Column from "../Column/Column.jsx";
import * as S from "./main.styled.js";
import { Container } from "../shared.styled.js";

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];


const Main = ( {cards} ) => {
    return (
        <S.Main>
            <Container>
                <S.MainBlock>
                    <S.MainContent>
                        <>
                        {statusList.map((status) => (
                            <Column
                                key={status}
                                titleProps={status}
                                cardList={cards.filter((card) => card.status === status)}
                            />
                        ))}
                        </>
                    </S.MainContent>
                </S.MainBlock>
            </Container>
        </S.Main>
    );
}

export default Main;