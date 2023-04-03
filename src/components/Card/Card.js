import styles from "./Card.module.scss";
import React from "react";

const Card = (props) => {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    React.useEffect(() => {
        console.log("Переменная изменилась")
    }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onClickFavorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.img} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardCostBottom}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>

                <img className={styles.button} onClick={onClickPlus}
                     src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>

            </div>
        </div>
    )
}
export default Card;