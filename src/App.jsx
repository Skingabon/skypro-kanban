import {useEffect, useState} from 'react'
import './App.css'
import PopExit from "./components/Popup/PopExit/PopExit.jsx";
import PopNewCard from "./components/Popup/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/Popup/PopBrowse/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import {cardList} from "./data.js";
import {GlobalStyled} from "./global.styled.js";
import {Loader, Wrapper} from "./app.styled.js";
function App() {
    const [cards, setCards] =useState(cardList)
    const [isLoading, setIsLoading] = useState(true)
    function onCardAdd() {
        const newTask = {
                id: cards.length + 1,
                topic:"Web design",
                title:"Новая задача 1",
                date:"05.06.2024",
                status:"Без статуса",
            }
            setCards([...cards, newTask]);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            <GlobalStyled />
      <Wrapper>

<PopExit/>

<PopNewCard />

<PopBrowse/>


<Header onCardAdd={onCardAdd} />

          {!isLoading ? <Main cards={cards} /> :<Loader>Данные загружаются</Loader>}


      </Wrapper>
        </>
  );
  
}

export default App
