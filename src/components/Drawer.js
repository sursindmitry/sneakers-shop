const Drawer = ({items = [], onRemove, onClose}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Close"/>
                </h2>
                {items.length > 0 ? (
                    <div className="items">
                        {items.map((obj) => (
                            <div>
                                <div className="cartItem d-flex align-center">
                                    <div
                                        style={{backgroundImage: `url(${obj.img})`}}
                                        className="cartImg"></div>
                                    <div className="text-item">
                                        <p>{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="removeBtn"
                                         src="/img/btn-remove.svg"
                                         alt="remove"/>
                                </div>

                            </div>

                        ))}

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
                            <button className="greenButton">Оформить заказ <img src="/img/arrow.svg"
                                                                                alt="Arrow"/></button>
                        </div>
                    </div>

                ) : (
                    <div className="cartEmpty">
                        <img width="120" height="120" src="/img/empty-cart.png" alt="Empty cart"/>
                        <h2>Корзина пуста</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, что бы сделать заказ.</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrow.svg" alt="Arrow"/>
                            Вернутся назад
                        </button>
                    </div>
                )
                }


            </div>
        </div>
    )
}
export default Drawer;