function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2>Корзина <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/></h2>
                    <div className="items">
                        <div className="cartItem d-flex align-center">
                            <div
                                style={{backgroundImage: 'url(/img/sneakers/1.png)'}}
                                className="cartImg"></div>
                            <div className="text-item">
                                <p>Мужские кроссовки Diadora Winner SL</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                        </div>
                        <div className="cartItem d-flex align-center">
                            <div
                                style={{backgroundImage: 'url(/img/sneakers/1.png)'}}
                                className="cartImg"></div>
                            <div className="text-item">
                                <p>Мужские кроссовки Diadora Winner SL</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                        </div>
                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>21 498 руб.</b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
                    </div>

                </div>
            </div>


            <header>
                <div className="headerLeft">
                    <img width={40} height={40} src="/img/logo.svg" alt="Logo"/>
                    <div>
                        <h3>Sneakers shop</h3>
                        <p>Магазин лучших кросовок</p>
                    </div>
                </div>

                <ul className="headerRight">
                    <li>
                        <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" alt="User"/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <div className="d-flex align-center justify-between sneakers-box">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img width={20} src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/heart-unliked.svg" alt="Unliked"/>
                        </div>
                        <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers"/>
                        <h5>Мужские кроссовки Diadora Winner SL</h5>
                        <div className="cardBottom d-flex">
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
                        <div className="cardBottom d-flex">
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
                        <div className="cardBottom d-flex">
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
                        <div className="cardBottom d-flex">
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
