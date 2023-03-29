const Card = (props) => {
    return (
        <div className="card">
            <img width={133} height={112} src={props.img} alt="Sneakers"/>
            <h5>{props.name}</h5>
            <div className="cardBottom d-flex">
                <div className="cardCostBottom">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    )
}
export default Card;