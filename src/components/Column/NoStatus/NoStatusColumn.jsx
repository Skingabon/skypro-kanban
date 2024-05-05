import Card from "../../Card/Card.jsx";

const NoStatusColumn = ( {titleProps} ) => {
     // console.log(title);
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{titleProps}</p>
            </div>
            <div className="cards">
                <Card
                    categoryCard="Web design"
                    titleCard="Задача 1"
                    dateCard="05.06.2024"
                />
                <Card
                    categoryCard="Research"
                    titleCard="Задача 2"
                    dateCard="05.07.2024"
                />
                <Card
                    categoryCard="Copyriting"
                    titleCard="Задача 3"
                    dateCard="05.08.2024"
                />
                <Card
                    categoryCard="Research"
                    titleCard="Задача 4"
                    dateCard="05.09.2024"
                />
                <Card
                    categoryCard="Copyriting"
                    titleCard="Задача 5"
                    dateCard="05.10.2024"
                />
            </div>
        </div>
    );
}

export default NoStatusColumn;