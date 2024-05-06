import { useState } from 'react'
import './App.css'
import PopExit from "./components/Popup/PopExit/PopExit.jsx";
import PopNewCard from "./components/Popup/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/Popup/PopBrowse/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
function App() {
    return (
      <div className="wrapper">

<PopExit/>

<PopNewCard />

<PopBrowse/>

<Header />

        <Main />


      </div>
  );
  
}

export default App
