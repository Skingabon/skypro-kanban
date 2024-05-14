import NoStatusColumn from "../Column/NoStatus/NoStatusColumn.jsx";
import NeedWorkColumn from "../Column/NeedWork/NeedWorkColumn.jsx";
import InWorkColumn from "../Column/InWork/InWorkColumn.jsx";
import TestColumn from "../Column/Testing/TestColumn.jsx";
import DoneColumn from "../Column/Done/DoneColumn.jsx";

const Main = () => {
    return (
        <main className="main">
            <div className="container">

                <div className="main__block">
                    <div className="main__content">
                        <NoStatusColumn titleProps="Без статуса" />
                        <NeedWorkColumn titleProps="Нужно сделать" />
                        <InWorkColumn titleProps="В работе" />
                        <TestColumn titleProps="Тестирование" />
                        <DoneColumn titleProps="Готово" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;