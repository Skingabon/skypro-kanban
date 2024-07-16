import { createContext, useState } from "react";

export const TasksContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  // console.log("text 2")
  return (
    <TasksContext.Provider value={{ cards, setCards }}>
      {children}
    </TasksContext.Provider>
  );
};
