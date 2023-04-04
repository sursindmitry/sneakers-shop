import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    const [items, setItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false);


    React.useEffect(() => {
        fetch('https://642b8269208dfe2547196c38.mockapi.io/items').then(res => {
            return res.json();
        }).then((json) => {
            setItems(json)
        })
    }, [])

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
                <div className="d-flex flex-wrap">
                    {items.map((obj) => (
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
