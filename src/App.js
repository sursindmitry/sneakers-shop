import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className="d-flex align-center justify-between sneakers-box">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img width={20} src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex">
                    <Card name="Мужские кроссовки Diadora Winner SL" price="12 999" img="/img/sneakers/1.png"/>
                    <Card name="Мужские Кроссовки Nike Air Max 270" price="12 999" img="/img/sneakers/2.jpg"/>
                    <Card name="Мужские Кроссовки Nike Blazer Mid Suede" price="8 499" img="/img/sneakers/3.jpg"/>
                    <Card name="Кроссовки Puma X Aka Boku Future Rider" price="8 999" img="/img/sneakers/4.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default App;
