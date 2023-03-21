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
                ...
            </div>
        </div>
    );
}

export default App;
