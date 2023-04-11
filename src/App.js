import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    React.useEffect(() => {
        fetch('https://642b8269208dfe2547196c38.mockapi.io/items').then(res => {
            return res.json();
        }).then((json) => {
            setItems(json)
        })
    }, [])

    const onAddToCart = (obj) => {

        setCartItems(prev => [...prev, obj])

    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper clear">
            <Header onClickCart={() => setCartOpened(true)}/>
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
            <div className="content">
                <div className="d-flex align-center justify-between sneakers-box">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                    <div className="search-block d-flex">
                        <img width={20} src="/img/search.svg" alt="Search"/>
                        {searchValue && (<img
                            onClick={() => setSearchValue('')}
                            className="clear removeBtn"
                            src="/img/btn-remove.svg"
                            alt="remove"
                        />)}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                        <Card
                            key={index}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            onPlus={(obj) => onAddToCart(obj)}
                            onClickFavorite={() => console.log("Добавили в избранное")}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
