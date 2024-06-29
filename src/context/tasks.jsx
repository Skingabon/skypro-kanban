import { createContext, useState } from "react";
import {cardList} from "../data.js";

export const TasksContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [cards, setCards] = useState(cardList);
  console.log("text 2")
  return (
    <TasksContext.Provider value={{ cards, setCards }}>
      {children}
    </TasksContext.Provider>
  );
};
