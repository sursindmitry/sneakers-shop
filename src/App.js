import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {title: "Мужские кроссовки Diadora Winner SL", price: "12 999", img: "/img/sneakers/1.png"},
    {title: "Мужские Кроссовки Nike Air Max 270", price: "12 999", img: "/img/sneakers/2.jpg"},
    {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499", img: "/img/sneakers/3.jpg"},
    {title: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999", img: "/img/sneakers/4.jpg"}
]

function App() {
    const [cartOpened, setCartOpened] = React.useState(false);

    return (
        <div className="wrapper clear">
            <Header onClickCart={() => setCartOpened(true)}/>
            {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
            <div className="content">
                <div className="d-flex align-center justify-between sneakers-box">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img width={20} src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex">
                    {arr.map((obj) => (
                        <Card
                            img={obj.img}
                            title={obj.title}
                            price={obj.price}
                            onClickPlus={() => console.log("Добавили в корзину")}
                            onClickFavorite={() => console.log("Добавили в избранное")}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
