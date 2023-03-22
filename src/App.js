function App() {
    return (
        <div className="wrapper">
            <header className="clear">
                <div className="headerLeft">
                    <img width={40} height={40} src="/img/logo.svg"/>
                    <div>
                        <h3>Sneakers shop</h3>
                        <p>Магазин лучших кросовок</p>
                    </div>
                </div>

                <ul className="headerRight">
                    <li>
                        <img width={18} height={18} src="/img/cart.svg"/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg"/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>Все кроссовки</h1>
                <div className="sneakers">
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
                        <h5>Мужские кроссовки Diadora Winner SL</h5>
                        <div className="cardBottom">
                            <div className="cardCostBottom">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
                        <h5>Мужские кроссовки Diadora Winner SL</h5>
                        <div className="cardBottom">
                            <div className="cardCostBottom">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
                        <h5>Мужские кроссовки Diadora Winner SL</h5>
                        <div className="cardBottom">
                            <div className="cardCostBottom">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
                        <h5>Мужские кроссовки Diadora Winner SL</h5>
                        <div className="cardBottom">
                            <div className="cardCostBottom">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
