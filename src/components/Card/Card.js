import styles from "./Card.module.scss";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img width={133} height={112} src={props.img} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardCostBottom}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={styles.button} onClick={props.onClick}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    )
}
export default Card;